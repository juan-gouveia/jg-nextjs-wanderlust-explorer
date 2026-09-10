"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ExperienceCard from "../../components/ExperienceCard";
import { MOCK_EXPERIENCES } from "../../data/experiences";
import type { Experience } from "../../types";

function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setExperiences(MOCK_EXPERIENCES);
      setIsLoading(false);
    }, 300);

    return () => window.clearTimeout(timer);
  }, []);

  return { experiences, isLoading };
}

export default function ExperiencesPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase().trim() ?? "";
  const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const { experiences, isLoading } = useExperiences();
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  const filteredExperiences = experiences.filter((experience) => {
    if (!search) {
      return true;
    }

    return new RegExp(escapedSearch, "i").test(experience.name);
  });

  function toggleFavorite(id: string) {
    setFavoriteIds((currentFavorites) => {
      const nextFavorites = new Set(currentFavorites);

      if (nextFavorites.has(id)) {
        nextFavorites.delete(id);
      } else {
        nextFavorites.add(id);
      }

      return nextFavorites;
    });
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">
          Todas las experiencias
        </h1>

        <p className="mt-2 text-slate-600">
          {search
            ? `Resultados para: "${search}"`
            : "Descubre experiencias únicas alrededor del mundo."}
        </p>
      </header>

      {isLoading ? (
        <p className="py-12 text-center text-lg font-semibold text-slate-600">
          Cargando...
        </p>
      ) : filteredExperiences.length === 0 ? (
        <p className="py-12 text-center text-lg font-semibold text-slate-600">
          No se encontraron coincidencias
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {filteredExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={favoriteIds.has(experience.id)}
              onToggleFavorite={() => toggleFavorite(experience.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}