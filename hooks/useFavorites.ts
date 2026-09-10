"use client";

import { useSyncExternalStore } from "react";

const FAVORITES_STORAGE_KEY = "wanderlust-favorite-ids";
const FAVORITES_UPDATED_EVENT = "wanderlust-favorites-updated";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(FAVORITES_UPDATED_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(FAVORITES_UPDATED_EVENT, callback);
  };
}

function getFavoritesSnapshot() {
  return window.localStorage.getItem(FAVORITES_STORAGE_KEY) ?? "[]";
}

function getServerSnapshot() {
  return "[]";
}

function parseFavoriteIds(snapshot: string) {
  try {
    const favoriteIds: unknown = JSON.parse(snapshot);

    if (Array.isArray(favoriteIds) && favoriteIds.every((id) => typeof id === "string")) {
      return new Set(favoriteIds);
    }
  } catch {
    return new Set<string>();
  }

  return new Set<string>();
}

export default function useFavorites() {
  const favoritesSnapshot = useSyncExternalStore(
    subscribe,
    getFavoritesSnapshot,
    getServerSnapshot
  );
  const favoriteIds = parseFavoriteIds(favoritesSnapshot);

  function toggleFavorite(id: string) {
    const nextFavoriteIds = new Set(favoriteIds);

    if (nextFavoriteIds.has(id)) {
      nextFavoriteIds.delete(id);
    } else {
      nextFavoriteIds.add(id);
    }

    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify([...nextFavoriteIds])
    );
    window.dispatchEvent(new Event(FAVORITES_UPDATED_EVENT));
  }

  return {
    favoriteIds,
    toggleFavorite,
  };
}