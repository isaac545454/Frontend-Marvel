import { md5 } from '@/lib/md5'

type Thumbnail = {
	path: string
	extension: string
}

type Character = {
	id: number
	name: string
	description: string
	thumbnail: Thumbnail
}

type MarvelAPIResponse = {
	data: {
		results: Character[]
	}
}

export async function getCharacters(page: number = 1, limit: number = 10): Promise<Character[]> {
	const { ts, hash, apikey } = md5()
	const offset = (page - 1) * limit

	const res = await fetch(
		`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&offset=${offset}`,
	)

	if (!res.ok) throw new Error('Erro ao buscar personagens')

	const json = (await res.json()) as MarvelAPIResponse
	return json.data.results
}
