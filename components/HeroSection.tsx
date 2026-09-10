import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 px-4 py-24 text-white sm:px-6 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-rose-500/20 to-slate-950" />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
            Viaja. Descubre. Recuerda.
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Experiencias que convierten cada viaje en una historia.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Encuentra aventuras, sabores y momentos únicos alrededor del mundo.
          </p>

          <Link
            href="/experiences"
            className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Muéstrame las experiencias
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}