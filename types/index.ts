// Define shared TypeScript interfaces for the app here.

export interface Category {
  name: "Adventure" | "Nature" | "Culture" | "Food" | "Wellness";
}

// Combinaciones país/ciudad válidas.
type CityByCountry = {
  Perú: "Cusco" | "Lima" | "Arequipa";
  Colombia: "Bogotá" | "Medellín" | "Cartagena";
  España: "Madrid" | "Barcelona" | "Sevilla";
  Inglaterra: "Londres" | "Manchester" | "Liverpool";
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
