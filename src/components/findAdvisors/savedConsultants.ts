import jeremy from "../../assets/profile9.png";
import ari from "../../assets/profile7.png";
import sammy from "../../assets/profile13.png";
import peter from "../../assets/profile14.png";

export type SavedConsultant = {
  id: number;
  image: string;
  name: string;
  badge: "Insider" | "Pro" | "AdComm";
  rating: number;
  reviews: number;
  description: string;
  price: number;
};

export const initialSavedConsultants: SavedConsultant[] = [
  {
    id: 161,
    image: jeremy,
    name: "Jeremy T.",
    badge: "Pro",
    rating: 4.8,
    reviews: 15,
    description:
      "Former admissions reader and Yale Law grad—insider tips to perfect your application.",
    price: 70,
  },
  {
    id: 162,
    image: ari,
    name: "Ari L.",
    badge: "AdComm",
    rating: 4.8,
    reviews: 15,
    description:
      "Former admissions reader and Yale Law grad—insider tips to perfect your application.",
    price: 100,
  },
  {
    id: 163,
    image: sammy,
    name: "Sammy T.",
    badge: "Pro",
    rating: 4.8,
    reviews: 20,
    description:
      "Former admissions reader and Yale Law grad—insider tips to perfect your application.",
    price: 45,
  },
  {
    id: 164,
    image: peter,
    name: "Peter G.",
    badge: "AdComm",
    rating: 4.7,
    reviews: 10,
    description:
      "Former admissions reader and Yale Law grad—insider tips to perfect your application.",
    price: 60,
  },
];
