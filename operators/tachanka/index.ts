import { IOperator } from "~/types/operator"

export const tachanka: IOperator = {
  name: "Tachanka",
  role: "Defender",
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
    height: 183,
    weight: 86,
    price: { renown: 1000, r6credits: 0 },
  },
  bio: {
    real_name: "Alexandr Senaviev",
    birthplace: "Saint Petersburg, Russia",
  },
}
