import { Thumbnail } from './Thumbnail'

export interface Comic {
  id: number
  title: string
  description: string | null
  pageCount: number
  thumbnail: Thumbnail
  prices: {
    type: string
    price: number
  }[]
  creators: {
    available: number
    items: {
      name: string
      role: string
    }[]
  }
  dates: {
    type: string
    date: string
  }[]
} 