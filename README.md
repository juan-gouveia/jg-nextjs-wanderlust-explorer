# Wanderlust

Plataforma para descubrir y guardar experiencias únicas alrededor del mundo: desde gastronomía hasta deportes extremos.

## ¿Con qué trabajaremos?

- SPA, React + Next.js, Tailwind, TypeScript, App Router
- Mobile-first, responsiva
- Catálogo mínimo de componentes:
  + ExperienceCard
  + SearchBar
  + FilterBar
  + Navbar
- Hooks integrados y al menos *un hook personalizado*

## ¿Qué necesitamos?

### / (Home/Inicio)

- Navbar fijada arriba, permanente en todas las vistas
  + Muestra estilos de enlace activo a través de usePathname
  + Filtro hover/dropdown por Category (inicia sin selección)
  + Filtro hover/dropdown por País -> Ciudad (CityByCountry)
  + SearchBar para filtrar experiencias por título
    * regex case-insensitive
    * Filtros activos y búsqueda almacenan como query param en URL con useSearchParams y usePathname
    * Al cargar página con query params existentes en la URL, inputs respectivos debe prerellenarse con los valores
- Sección hero con botón "Muéstrame las experiencias" que revela /experiences

+ /experiences
+ /experiences/[id]
+ /favorites
+ /profile

## Referencias de diseño

