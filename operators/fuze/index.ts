import { IOperator } from "~/types/operator"

export const fuze: IOperator = {
  name: "Fuze",
  role: "Attacker",
  unit: "SPETSNAZ",
  ratings: {
    health: 3,
    speed: 1,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "ru",
    season: "Release",
    height: 172,
    weight: 58,
    price: { renown: 1000, r6credits: 0 },
  },
  bio: {
    real_name: "Shuhrat Kessikbayev",
    birthplace: "Samarkand, Uzbekistan",
  },
}
