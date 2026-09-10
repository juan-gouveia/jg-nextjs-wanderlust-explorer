"use client";

import { Search } from "lucide-react";
import { FormEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchFromUrl = searchParams.get("search") ?? "";

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const searchValue = formData.get("search");
		const normalizedSearch =
			typeof searchValue === "string" ? searchValue.trim() : "";
		const params = new URLSearchParams(searchParams.toString());

		if (normalizedSearch) {
			params.set("search", normalizedSearch);
		} else {
			params.delete("search");
		}

		const queryString = params.toString();
		const destination = pathname === "/experiences" ? pathname : "/experiences";

		router.replace(queryString ? `${destination}?${queryString}` : destination);
	}

	return (
		<div className="border-b border-slate-200 bg-white">
			<form
				className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 sm:px-6"
				onSubmit={handleSubmit}
			>
				<label className="sr-only" htmlFor="experience-search">
					Buscar experiencias
				</label>
				<input
					id="experience-search"
					  key={searchFromUrl}
					  name="search"
					type="search"
					  defaultValue={searchFromUrl}
					placeholder="Buscar experiencias"
					className="h-10 min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1"
				/>
				<button
					type="submit"
					aria-label="Buscar experiencias"
					className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
				>
					<Search aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
				</button>
			</form>
		</div>
	);
}
