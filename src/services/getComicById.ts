import { Comic } from '@/types/Comic'
import { MarvelResponse } from '@/types/MarvelResponse'
import { md5 } from '@/lib/md5'

export async function getComicById(id: string): Promise<Comic | null> {
  const { ts, hash, apikey } = md5()

  const response = await fetch(
    `https://gateway.marvel.com/v1/public/comics/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`,
    {
      next: { revalidate: 60 * 60 * 24 },
      cache: 'force-cache',
    }
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar quadrinho')
  }

  const data: MarvelResponse<Comic> = await response.json()
  const comic = data.data.results?.[0] ?? null

  return comic
}
