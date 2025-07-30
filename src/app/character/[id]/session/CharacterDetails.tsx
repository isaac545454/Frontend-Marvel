import { getCharacterById } from '@/services/getCharacterById'
import { notFound } from 'next/navigation'
import styles from './CharacterDetails.module.css'

interface CharacterDetailsProps {
  id: string
}

export default async function CharacterDetails({ id }: CharacterDetailsProps) {
  const character = await getCharacterById(id)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{character.name}</h1>
      {character.description && (
        <p className={styles.description}>{character.description}</p>
      )}
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className={styles.image}
      />
    </div>
  )
}