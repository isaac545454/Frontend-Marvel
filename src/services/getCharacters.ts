import { md5 } from '@/lib/md5'
import { Character } from '@/types/Character'

type MarvelAPIResponse = {
  data: {
    results: Character[]
    total: number
  }
}

interface CharactersResponse {
  characters: Character[]
  totalPages: number
}

export async function getCharacters(page: number = 1, limit: number = 15): Promise<CharactersResponse> {
  const { ts, hash, apikey } = md5()
  const offset = (page - 1) * limit

  const res = await fetch(
    `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&offset=${offset}`,
  )

  if (!res.ok) throw new Error('Erro ao buscar personagens')

  const json: MarvelAPIResponse = await res.json() 
  const totalPages = Math.ceil(json.data.total / limit)

  return {
    characters: json.data.results,
    totalPages
  }
}