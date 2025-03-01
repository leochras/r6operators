import { IOperator } from "~/types/operator"

export const ace: IOperator = {
  name: "Ace",
  role: "Attacker",
  unit: "NIGHTHAVEN",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "no",
    season: "Y5S2",
    height: 187,
    weight: 75,
    price: { renown: 20_000, r6credits: 480 },
  },
  bio: {
    real_name: "Håvard Haugland",
    birthplace: "Lærdalsøyri, Norway",
  },
}
