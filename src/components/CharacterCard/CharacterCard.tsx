import Image from 'next/image'
import Link from 'next/link'
import { Character } from '@/types/Character'
import styles from './CharacterCard.module.css'

interface CharacterCardProps {
  character: Character
  searchParams: any
}

export function CharacterCard({ character, searchParams }: CharacterCardProps) {
  const resolvedParams = await searchParams
  return (
    <Link href={`/character/${character.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{character.name}</h3>
        {character.description && (
          <p className={styles.description}>{character.description}</p>
        )}
      </div>
    </Link>
  )
} 