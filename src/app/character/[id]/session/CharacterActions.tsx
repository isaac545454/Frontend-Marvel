'use client'

import { FavoriteButton } from './FavoriteButton'
import styles from './CharacterDetails.module.css'

interface CharacterActionsProps {
  characterId: string
  characterName: string
  characterImage: string
}

export function CharacterActions({ characterId, characterName, characterImage }: CharacterActionsProps) {
  return (
    <div className={styles.actions}>
      <FavoriteButton 
        characterId={characterId}
        characterName={characterName}
        characterImage={characterImage}
      />
    </div>
  )
}