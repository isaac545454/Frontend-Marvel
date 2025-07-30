import { Comic } from '@/types/Comic'
import styles from './ComicDetails.module.css'

interface ComicCreatorsProps {
  comic: Comic
}

export function ComicCreators({ comic }: ComicCreatorsProps) {
  if (comic.creators.items.length === 0) return null

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Criadores</h2>
      <div className={styles.creators}>
        {comic.creators.items.map((creator, index) => (
          <div key={index} className={styles.creator}>
            <span className={styles.creatorName}>{creator.name}</span>
            <span className={styles.creatorRole}>{creator.role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}