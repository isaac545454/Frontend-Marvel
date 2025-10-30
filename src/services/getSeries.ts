import { md5 } from '@/lib/md5'
import { Series } from '@/types/Series'

interface MarvelAPIResponse {
  data: {
    results: Series[]
    total: number
  }
}

interface SeriesResponse {
  series: Series[]
  totalPages: number
}

export async function getSeries(
  page: number = 1,
  limit: number = 15
): Promise<SeriesResponse> {
  const { ts, hash, apikey } = md5()
  const offset = (page - 1) * limit

  const response = await fetch(
    `https://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&offset=${offset}&orderBy=startYear`,
    {
      cache: 'force-cache',          
      next: { revalidate: 60 * 60 * 24 }, 
    }
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar séries')
  }

  const data: MarvelAPIResponse = await response.json()

  const total = data.data.total ?? 0
  const series = data.data.results ?? []

  return {
    series,
    totalPages: Math.ceil(total / limit),
  }
}
