import { md5 } from '@/lib/md5'
import { Comic } from '@/types/Comic'

interface MarvelAPIResponse {
  data: {
    results: Comic[]
    total: number
  }
}

interface ComicsResponse {
  comics: Comic[]
  totalPages: number
}

export async function getComics(
  page: number = 1,
  limit: number = 15
): Promise<ComicsResponse> {
  const { ts, hash, apikey } = md5()
  const offset = (page - 1) * limit

  const response = await fetch(
    `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&offset=${offset}&orderBy=focDate`,
    {
      cache: 'force-cache',  
      next: { revalidate: 60 * 60 * 24 },  
    }
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar quadrinhos')
  }

  const data: MarvelAPIResponse = await response.json()

  const total = data.data.total ?? 0
  const comics = data.data.results ?? []

  return {
    comics,
    totalPages: Math.ceil(total / limit),
  }
}
