import { MarvelResponse } from '@/types/MarvelResponse'
import { Series } from '@/types/Series'
import { md5 } from '@/lib/md5'

export async function getSeriesById(id: string): Promise<Series> {
  const { ts, hash, apikey } = md5()
  
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/series/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`,
    { next: { revalidate: 60 * 60 * 24 } } // Cache for 24 hours
  )

  if (!response.ok) {
    throw new Error('Failed to fetch series')
  }

  const data: MarvelResponse<Series> = await response.json()
  return data.data.results[0]
}