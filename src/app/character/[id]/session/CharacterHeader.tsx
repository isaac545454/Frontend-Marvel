import { Character } from '@/types/Character'
import styles from './CharacterDetails.module.css'

interface CharacterHeaderProps {
  character: Character
}

export function CharacterHeader({ character }: CharacterHeaderProps) {
  const externalLinks = character?.urls?.map(url => ({
    detail: url.type.charAt(0).toUpperCase() + url.type.slice(1),
    url: url.url
  })) ?? []

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{character.name}</h1>
      <div className={styles.externalLinks}>
        {externalLinks.map(link => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            {link.detail}
          </a>
        ))}
      </div>
    </div>
  )
}