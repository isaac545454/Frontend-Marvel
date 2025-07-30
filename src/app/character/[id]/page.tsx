import { getCharacterById } from '@/services/getCharacterById'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

interface CharacterPageProps {
  params: {
    id: string
  }
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const character = await getCharacterById(params.id)

  if (!character) {
    notFound()
  }

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