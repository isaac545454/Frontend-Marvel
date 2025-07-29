import { getCharacters } from '@/services/getCharacters'
import { CharacterCard } from '@/components/CharacterCard'
import styles from './page.module.css'

interface CharactersPageProps {
	searchParams: {
		page?: number
	}
}

export default async function CharactersPage({ searchParams }: CharactersPageProps) {
	const pageParam = searchParams?.page ?? 1
	const characters = await getCharacters(pageParam)

	return (
		<div className={styles.charactersContainer}>
			<div className={styles.charactersGrid}>
				{characters.map(char => (
					<CharacterCard key={char.id} character={char} />
				))}
			</div>
		</div>
	)
} 