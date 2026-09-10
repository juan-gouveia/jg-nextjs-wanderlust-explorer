"use client";

import { ArrowLeft, Heart, MapPin, Star } from "lucide-react";
import Link from "next/link";
import type { Experience } from "../types";
import useFavorites from "../hooks/useFavorites";

interface ExperienceDetailProps {
  experience: Experience;
}

export default function ExperienceDetail({ experience }: ExperienceDetailProps) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.has(experience.id);

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <Link
        href="/experiences"
        className="inline-flex h-10 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Volver a experiencias
      </Link>

      <article className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="relative">
          <img
            src={experience.imageUrl}
            alt={experience.name}
            className="h-64 w-full object-cover sm:h-96"
          />
          <button
            type="button"
            onClick={() => toggleFavorite(experience.id)}
            aria-label={
              isFavorite
                ? `Quitar ${experience.name} de favoritos`
                : `Añadir ${experience.name} a favoritos`
            }
            aria-pressed={isFavorite}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-md transition-colors hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            <Heart
              aria-hidden="true"
              className={isFavorite ? "h-5 w-5 fill-rose-500 text-rose-500" : "h-5 w-5"}
              strokeWidth={2}
            />
          </button>
        </div>

        <div className="p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
              {experience.category.name}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
              <Star aria-hidden="true" className="h-4 w-4 fill-current" />
              {experience.rating.toFixed(1)}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            {experience.name}
          </h1>

          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
            <MapPin aria-hidden="true" className="h-4 w-4 text-slate-500" />
            {experience.destination.city}, {experience.destination.country}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700">
            {experience.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-2xl font-black text-slate-900">
              ${experience.price}
              <span className="text-sm font-normal text-slate-500"> / persona</span>
            </p>
            <button
              type="button"
              className="h-11 rounded-lg bg-slate-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Reservar experiencia
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}