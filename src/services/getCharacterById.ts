import { md5 } from '@/lib/md5'
import { Character } from '@/types/Character'
import { MarvelResponse } from '@/types/MarvelResponse'
 

export async function getCharacterById(id: string): Promise<Character> {
  const { ts, hash, apikey } = md5()
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`,
    { next: { revalidate: 60 * 60 * 24 } }  
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar personagem')
  }

  const data: MarvelResponse<Character> = await response.json()
  return data.data.results[0] || null
}