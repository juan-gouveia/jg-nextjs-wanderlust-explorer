"use client";

import { Heart, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/experiences") {
      return pathname === href || pathname.startsWith("/experiences/");
    }

    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 sm:px-6">
        <div className="shrink-0">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-full p-2 transition-colors sm:px-3",
              isActive("/")
                ? "bg-slate-900 text-white"
                : "text-slate-800 hover:bg-slate-100"
            )}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-gradient-to-br from-amber-300 via-orange-300 to-rose-300 text-sm font-black text-slate-900">
              W
            </span>
            <span className="hidden text-base font-semibold tracking-tight sm:inline">
              Wanderlust
            </span>
          </Link>
        </div>

        <div className="flex min-w-0 flex-1 justify-center">
          <Link
            href="/experiences"
            aria-current={isActive("/experiences") ? "page" : undefined}
            className={cn(
              "whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:px-4",
              isActive("/experiences")
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            )}
          >
            Experiences
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <div className="group relative">
            <Link
              href="/favorites"
              aria-label="Favorites"
              aria-current={isActive("/favorites") ? "page" : undefined}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2",
                isActive("/favorites")
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <Heart aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
            </Link>
            <span className="pointer-events-none absolute right-0 top-full z-10 mt-2 hidden whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white shadow-sm md:group-hover:block md:group-focus-within:block">
              Favorites
            </span>
          </div>

          <div className="group relative">
            <Link
              href="/profile"
              aria-label="Profile"
              aria-current={isActive("/profile") ? "page" : undefined}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2",
                isActive("/profile")
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <UserRound aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
            </Link>
            <span className="pointer-events-none absolute right-0 top-full z-10 mt-2 hidden whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-white shadow-sm md:group-hover:block md:group-focus-within:block">
              Profile
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}