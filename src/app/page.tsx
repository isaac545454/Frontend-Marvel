import { getCharacters } from '@/services/getCharacters'
import Image from 'next/image'

interface CharactersPageProps {
	searchParams: {
		page: string
	}
}

export default async function CharactersPage({ searchParams }: CharactersPageProps) {
	const params = await searchParams
	const characters = await getCharacters(Number(params.page))
	console.log('aaaa', params)

	return (
		<div className="characters-container">
			<h1 className="characters-title">Personagens da Marvel</h1>
			<ul className="characters-grid">
				{characters.map(char => (
					<li key={char.id} className="character-card">
						<Image
							src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
							alt={char.name}
							width={200}
							height={200}
							className="character-image"
						/>
						<h2 className="character-name">{char.name}</h2>
					</li>
				))}
			</ul>
		</div>
	)
}
