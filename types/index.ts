// Define shared TypeScript interfaces for the app here.

export interface Category {
  name: "Adventure" | "Nature" | "Culture" | "Food" | "Wellness";
}

// Catalog of valid city/country pairs; extend as new destinations are supported.
type CityByCountry = {
  Perú: "Cusco" | "Lima" | "Arequipa";
  Colombia: "Bogotá" | "Medellín" | "Cartagena";
  Chile: "Santiago" | "Valparaíso";
};

export type Destination = {
  [Country in keyof CityByCountry]: {
    country: Country;
    city: CityByCountry[Country];
  };
}[keyof CityByCountry];

export interface Experience {
  id: string;
  name: string;
  description: string;
  category: Category;
  destination: Destination;
  price: number;
  rating: number;
  imageUrl: string;
}
