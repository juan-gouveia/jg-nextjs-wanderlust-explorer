"use client";

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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-start">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-full px-3 py-2 transition-colors",
              isActive("/")
                ? "bg-slate-900 text-white"
                : "text-slate-800 hover:bg-slate-100"
            )}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-gradient-to-br from-amber-300 via-orange-300 to-rose-300 text-sm font-black text-slate-900">
              W
            </span>
            <span className="text-base font-semibold tracking-tight">
              Wanderlust
            </span>
          </Link>
        </div>

        <div className="flex flex-1 justify-center">
          <Link
            href="/experiences"
            aria-current={isActive("/experiences") ? "page" : undefined}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              isActive("/experiences")
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            )}
          >
            Experiences
          </Link>
        </div>

        <div className="flex flex-1 justify-end gap-2">
          <Link
            href="/favorites"
            aria-current={isActive("/favorites") ? "page" : undefined}
            className={cn(
              "rounded-full px-3 py-2 text-sm font-medium transition-colors",
              isActive("/favorites")
                ? "bg-slate-900 text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            Favorites
          </Link>

          <Link
            href="/profile"
            aria-current={isActive("/profile") ? "page" : undefined}
            className={cn(
              "rounded-full px-3 py-2 text-sm font-medium transition-colors",
              isActive("/profile")
                ? "bg-slate-900 text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
}