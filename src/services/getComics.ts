import { md5 } from '@/lib/md5'
import { Comic } from '@/types/Comic'

type MarvelAPIResponse = {
    data: {
        results: Comic[]
    }
}

export async function getComics(page: number = 1, limit: number = 15): Promise<Comic[]> {
    const { ts, hash, apikey } = md5()
    const offset = (page - 1) * limit
 
    const res = await fetch(
        `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&offset=${offset}&orderBy=focDate`,
    )

    if (!res.ok) throw new Error('Erro ao buscar comics')

    const json: MarvelAPIResponse  = await res.json()
    return json.data.results
} 