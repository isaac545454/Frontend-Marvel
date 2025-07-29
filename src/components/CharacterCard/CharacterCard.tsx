import Image from 'next/image'
import { Character } from '@/types/Character'
import styles from './CharacterCard.module.css'

interface CharacterCardProps {
	character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
	return (
		<div className={styles.characterCard}>
			<Image
				src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
				alt={character.name}
				width={200}
				height={200}
				className={styles.characterImage}
			/>
			<h2 className={styles.characterName}>{character.name}</h2>
		</div>
	)
} 