"use client";

import Link from "next/link";
import ExperienceCard from "../../components/ExperienceCard";
import { MOCK_EXPERIENCES } from "../../data/experiences";
import useFavorites from "../../hooks/useFavorites";

export default function FavoritesPage() {
	const { favoriteIds, toggleFavorite } = useFavorites();
	const favoriteExperiences = MOCK_EXPERIENCES.filter((experience) =>
		favoriteIds.has(experience.id)
	);

	return (
		<main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
			<header className="mb-8">
				<h1 className="text-3xl font-black tracking-tight text-slate-900">
					Mis favoritos
				</h1>
				<p className="mt-2 text-slate-600">
					Tus experiencias guardadas para el próximo viaje.
				</p>
			</header>

			{favoriteExperiences.length === 0 ? (
				<div className="py-12 text-center">
					<p className="text-lg font-semibold text-slate-600">
						Aún no tienes experiencias favoritas.
					</p>
					<Link
						href="/experiences"
						className="mt-4 inline-flex h-10 items-center rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
					>
						Explorar experiencias
					</Link>
				</div>
			) : (
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
					{favoriteExperiences.map((experience) => (
						<ExperienceCard
							key={experience.id}
							experience={experience}
							isFavorite
							onToggleFavorite={() => toggleFavorite(experience.id)}
						/>
					))}
				</div>
			)}
		</main>
	);
}
