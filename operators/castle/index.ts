import { IOperator } from "~/types/Operator"

export const castle: IOperator = {
  name: "Castle",
  role: "Defender",
  unit: "SWAT",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "us",
    season: "Release",
    height: 185,
    weight: 86,
  },
  bio: {
    real_name: "Miles Campbell",
    birthplace: "Sherman Oaks, U.S.A",
  },
}