import { IOperator } from "~/types/operator"

export const kapkan: IOperator = {
  name: "Kapkan",
  role: "Defender",
  unit: "SPETSNAZ",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "ru",
    season: "Release",
    height: 180,
    weight: 80,
    price: { renown: 1000, r6credits: 0 },
  },
  bio: {
    real_name: "Maxim Basuda",
    birthplace: "Kovrov, Russia",
  },
}
