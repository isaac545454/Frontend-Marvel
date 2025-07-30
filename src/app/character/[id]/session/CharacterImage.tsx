import { Character } from '@/types/Character'
import styles from './CharacterDetails.module.css'
import Image from 'next/image'

interface CharacterImageProps {
  character: Character
}

export function CharacterImage({ character }: CharacterImageProps) {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        width={500}
        height={500}
        className={styles.image}
      />
    </div>
  )
}