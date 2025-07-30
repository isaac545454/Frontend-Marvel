import { Thumbnail } from './Thumbnail'

export interface Series {
  id: number
  title: string
  description: string | null
  startYear: number
  endYear: number
  rating: string
  thumbnail: Thumbnail
  creators: {
    available: number
    items: {
      name: string
      role: string
    }[]
  }
} 