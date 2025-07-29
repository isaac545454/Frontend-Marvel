import { getCharacters } from '@/services/getCharacters'
import { CharacterCard } from '@/components/CharacterCard/CharacterCard'
import styles from './CharactersGrid.module.css'

interface CharactersGridProps {
	page: number
}

export default async function CharactersGrid({ page }: CharactersGridProps) {
	const characters = await getCharacters(page)

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