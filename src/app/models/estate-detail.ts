import { Estate } from "./estate"

export interface EstateDetail extends Estate {
  description: string
  street: string
  streetNumber: string
  flatNumber: string
  zipCode: string
  country: string
  yearOfConstruction: number
  marketType: string
  finishState: string
  floor: number
  numberOfRooms: number
}
