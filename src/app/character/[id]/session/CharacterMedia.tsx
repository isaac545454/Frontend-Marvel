import { MediaItem } from '@/types/MediaItem'
import styles from './CharacterDetails.module.css'

interface CharacterMediaProps {
  title: string
  items: MediaItem[]
}

export function CharacterMedia({ title, items }: CharacterMediaProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <ul className={styles.list}>
        {items.slice(0, 5).map(item => (
          <li key={item.resourceURI} className={styles.listItem}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}