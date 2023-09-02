import { Photo } from "./photo"

export interface Member {
  id: number
  userName: string
  userEmail: string
  firstName: string
  lastName: string
  phoneNumber: string
  photo: Photo
}
