import { Character } from '@/types/Character'
import styles from './CharacterDetails.module.css'

interface CharacterDescriptionProps {
  character: Character
}

export function CharacterDescription({ character }: CharacterDescriptionProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Descrição</h2>
      <p className={styles.description}>{character.description}</p>
    </div>
  )
}