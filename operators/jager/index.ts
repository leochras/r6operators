import { IOperator } from "~/types/operator"

export const jager: IOperator = {
  name: "Jäger",
  role: "Defender",
  unit: "GSG9",
  ratings: {
    health: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "de",
    season: "Release",
    height: 180,
    weight: 64,
    price: { renown: 1000, r6credits: 0 },
  },
  bio: {
    real_name: "Marius Streicher",
    birthplace: "Düsseldorf, Germany",
  },
}
