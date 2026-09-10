"use client";

import Link from "next/link";
import type { Experience } from "../types";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export default function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  const { id, name, description, category, destination, price, rating, imageUrl } =
    experience;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-56 w-full object-cover"
        />

        <button
          type="button"
          onClick={onToggleFavorite}
          aria-label={
            isFavorite
              ? `Quitar ${name} de favoritos`
              : `Añadir ${name} a favoritos`
          }
          aria-pressed={isFavorite}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-md transition-colors hover:bg-rose-50"
        >
          <span className={isFavorite ? "text-rose-500" : "text-slate-500"}>
            {isFavorite ? "♥" : "♡"}
          </span>
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
            {category.name}
          </span>

          <span className="text-sm font-semibold text-amber-500">
            ★ {rating.toFixed(1)}
          </span>
        </div>

        <h2 className="mt-4 text-xl font-bold text-slate-900">{name}</h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <p className="mt-4 text-sm text-slate-500">
          {destination.city}, {destination.country}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-lg font-black text-slate-900">
            ${price}
            <span className="text-sm font-normal text-slate-500"> / persona</span>
          </p>

          <Link
            href={`/experiences/${id}`}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </article>
  );
}