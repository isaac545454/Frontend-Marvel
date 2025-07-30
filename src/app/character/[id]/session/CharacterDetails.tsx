import { getCharacterById } from '@/services/getCharacterById'
import { formatDate } from '@/lib/date'
import { CharacterHeader } from './CharacterHeader'
import { CharacterImage } from './CharacterImage'
import { CharacterDescription } from './CharacterDescription'
import { CharacterStats } from './CharacterStats'
import { CharacterMedia } from './CharacterMedia'
import { CharacterActions } from './CharacterActions'
import styles from './CharacterDetails.module.css'

interface CharacterDetailsProps {
  params: {
    id: string
  }
}

export default async function CharacterDetails({ params }: CharacterDetailsProps) {
  const character = await getCharacterById(params.id)
  const lastModified = formatDate(character?.modified)

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <CharacterHeader character={character} />
        <CharacterActions 
          characterId={character.id.toString()}
          characterName={character.name} 
          characterImage={character.thumbnail.path + '.' + character.thumbnail.extension}
        />
      </div>

      <div className={styles.content}>
        <CharacterImage character={character} />

        <div className={styles.info}>
          {character.description && (
            <CharacterDescription character={character} />
          )}
          
          <CharacterStats character={character} />
          
          {character.comics.items.length > 0 && (
            <CharacterMedia 
              title="Últimos Quadrinhos"
              items={character.comics.items}
            />
          )}
          
          {character.series.items.length > 0 && (
            <CharacterMedia 
              title="Séries"
              items={character.series.items}
            />
          )}

          <div className={styles.footer}>
            <span className={styles.modified}>
              Última atualização: {lastModified}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}