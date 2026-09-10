"use client";

import { RotateCcw } from "lucide-react";
import { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MOCK_EXPERIENCES } from "../data/experiences";

const categories = [
	...new Set(MOCK_EXPERIENCES.map((experience) => experience.category.name)),
];
const countries = [
	...new Set(MOCK_EXPERIENCES.map((experience) => experience.destination.country)),
];
const citiesByCountry = Object.fromEntries(
	countries.map((country) => [
		country,
		[
			...new Set(
				MOCK_EXPERIENCES.filter(
					(experience) => experience.destination.country === country
				).map((experience) => experience.destination.city)
			),
		],
	])
);

export default function FilterBar() {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const category = searchParams.get("category") ?? "";
	const country = searchParams.get("country") ?? "";
	const city = searchParams.get("city") ?? "";
	const cities = citiesByCountry[country] ?? [];
	const selectedCity = cities.some((option) => option === city) ? city : "";
	const hasActiveFilters = Boolean(category || country || city);

	function updateParams(updates: Record<string, string>) {
		const params = new URLSearchParams(searchParams.toString());

		Object.entries(updates).forEach(([key, value]) => {
			if (value) {
				params.set(key, value);
			} else {
				params.delete(key);
			}
		});

		const queryString = params.toString();
		router.replace(queryString ? `${pathname}?${queryString}` : pathname);
	}

	function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
		updateParams({ category: event.target.value });
	}

	function handleCountryChange(event: ChangeEvent<HTMLSelectElement>) {
		updateParams({ country: event.target.value, city: "" });
	}

	function handleCityChange(event: ChangeEvent<HTMLSelectElement>) {
		updateParams({ city: event.target.value });
	}

	function clearFilters() {
		updateParams({ category: "", country: "", city: "" });
	}

	return (
		<section aria-label="Filtrar experiencias" className="mb-8">
			<div className="grid grid-cols-3 gap-2 sm:gap-3">
				<div>
					<label className="sr-only" htmlFor="category-filter">
						Categoría
					</label>
					<select
						id="category-filter"
						value={category}
						onChange={handleCategoryChange}
						className="h-10 w-full min-w-0 rounded-lg border border-slate-300 bg-white px-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 sm:px-3 sm:text-sm"
					>
						<option value="">Categorías</option>
						{categories.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>

				<div>
					<label className="sr-only" htmlFor="country-filter">
						País
					</label>
					<select
						id="country-filter"
						value={country}
						onChange={handleCountryChange}
						className="h-10 w-full min-w-0 rounded-lg border border-slate-300 bg-white px-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 sm:px-3 sm:text-sm"
					>
						<option value="">Países</option>
						{countries.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>

				<div>
					<label className="sr-only" htmlFor="city-filter">
						Ciudad
					</label>
					<select
						id="city-filter"
						value={selectedCity}
						onChange={handleCityChange}
						disabled={!country}
						className="h-10 w-full min-w-0 rounded-lg border border-slate-300 bg-white px-2 text-xs text-slate-900 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 sm:px-3 sm:text-sm"
					>
						<option value="">Ciudades</option>
						{cities.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>
			</div>

			{hasActiveFilters ? (
				<button
					type="button"
					onClick={clearFilters}
					className="mt-3 inline-flex h-9 items-center gap-2 rounded-lg px-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1"
				>
					<RotateCcw aria-hidden="true" className="h-4 w-4" />
					Limpiar filtros
				</button>
			) : null}
		</section>
	);
}
