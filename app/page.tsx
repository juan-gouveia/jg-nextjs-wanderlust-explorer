import HeroSection from "../components/HeroSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">
          Descubre experiencias únicas
        </h2>
      </section>
    </main>
  );
}