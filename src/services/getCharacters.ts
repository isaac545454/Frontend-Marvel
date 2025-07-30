import { api } from '@/lib/api'
import { Character } from '@/types/Character'
import { MarvelResponse } from '@/types/MarvelResponse'

interface CharactersResponse {
  characters: Character[]
  totalPages: number
}

export async function getCharacters(page: number = 1, limit: number = 15): Promise<CharactersResponse> {
  const offset = (page - 1) * limit

  try {
    const response = await api.get<MarvelResponse<Character>>('/characters', {
      params: {
        limit,
        offset
      }
    })

    const totalPages = Math.ceil(response.data.data.total / limit)

    return {
      characters: response.data.data.results,
      totalPages
    }
  } catch (error) {
    console.error('Error fetching characters:', error)
    throw new Error('Erro ao buscar personagens')
  }
}