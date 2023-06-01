import Armor from "./Armor"

export default class Character {
  id!: number
  name!: string
  description?: string
  appearance?: string
  armor!: Armor
  avatar!: string
  collection?: string[]
}