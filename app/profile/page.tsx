"use client";

import { Heart, UserRound } from "lucide-react";
import Link from "next/link";
import useFavorites from "../../hooks/useFavorites";

export default function ProfilePage() {
	const { favoriteIds } = useFavorites();
	const favoriteCount = favoriteIds.size;

	return (
		<main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
			<header className="mb-8">
				<h1 className="text-3xl font-black tracking-tight text-slate-900">
					Mi perfil
				</h1>
				<p className="mt-2 text-slate-600">
					Tu espacio para guardar las experiencias que quieres vivir.
				</p>
			</header>

			<section className="max-w-xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
				<div className="flex items-center gap-4">
					<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-700">
						<UserRound aria-hidden="true" className="h-7 w-7" />
					</div>
					<div>
						<h2 className="text-xl font-bold text-slate-900">Viajero Wanderlust</h2>
						<p className="mt-1 text-sm text-slate-600">Perfil de usuario simulado</p>
					</div>
				</div>

				<Link
					href="/favorites"
					className="mt-8 flex items-center justify-between rounded-lg border border-slate-200 p-4 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
				>
					<span className="inline-flex items-center gap-3 text-sm font-semibold text-slate-900">
						<Heart aria-hidden="true" className="h-5 w-5 text-rose-500" />
						Mis favoritos
					</span>
					<span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-bold text-white">
						{favoriteCount}
					</span>
				</Link>
			</section>
		</main>
	);
}
