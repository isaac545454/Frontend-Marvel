import { Character } from '@/types/Character'
import styles from './CharacterDetails.module.css'

interface CharacterImageProps {
  character: Character
}

export function CharacterImage({ character }: CharacterImageProps) {
  return (
    <div className={styles.imageContainer}>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className={styles.image}
      />
    </div>
  )
}