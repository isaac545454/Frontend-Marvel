import Image from 'next/image'
import Link from 'next/link'
import { Character } from '@/types/Character'
import styles from './CharacterCard.module.css'

interface CharacterCardProps {
  character: Character
}

export async function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/character/${character.id}`}>
        <div className={styles.imageContainer}>
          <Image
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className={styles.name}>{character.name}</h3>
      </Link>
      <div className={styles.info}>
        {character.description && (
          <p className={styles.description}>{character.description}</p>
        )}
      </div>
    </div>
  )
} 