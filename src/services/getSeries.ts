import { md5 } from '@/lib/md5'
import { Series } from '@/types/Series'

type MarvelAPIResponse = {
  data: {
    results: Series[]
  }
}

export async function getSeries(page: number = 1, limit: number = 15): Promise<Series[]> {
  const { ts, hash, apikey } = md5()
  const offset = (page - 1) * limit

  const res = await fetch(
    `https://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&offset=${offset}&orderBy=startYear`,
  )

  if (!res.ok) throw new Error('Erro ao buscar séries')

  const json: MarvelAPIResponse = await res.json()
  return json.data.results
} 