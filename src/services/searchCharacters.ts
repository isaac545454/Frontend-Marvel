import { md5 } from '@/lib/md5'
import { Character } from '@/types/Character'
import { MarvelResponse } from '@/types/MarvelResponse'

interface CharactersResponse {
  characters: Character[]
  totalPages: number
}

export async function searchCharacters(
  query: string,
  page: number = 1,
  limit: number = 15
): Promise<CharactersResponse> {
  const { ts, hash, apikey } = md5()
  const offset = (page - 1) * limit

  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${encodeURIComponent(query)}&ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&offset=${offset}`,
    {
      cache: 'force-cache',              
      next: { revalidate: 60 * 60 * 24 } 
    }
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar personagens')
  }

  const data: MarvelResponse<Character> = await response.json()
  const total = data.data.total ?? 0
  const characters = data.data.results ?? []

  return {
    characters,
    totalPages: Math.ceil(total / limit)
  }
}
