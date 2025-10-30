import { MarvelResponse } from '@/types/MarvelResponse'
import { Series } from '@/types/Series'
import { md5 } from '@/lib/md5'

export async function getSeriesById(id: string): Promise<Series | null> {
  const { ts, hash, apikey } = md5()
  
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/series/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`,
    {
      cache: 'force-cache',             
      next: { revalidate: 60 * 60 * 24 }  
    }
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar série')
  }

  const data: MarvelResponse<Series> = await response.json()
  const series = data.data.results?.[0] ?? null

  return series
}
