import { Comic } from '@/types/Comic'
import styles from './ComicDetails.module.css'

interface ComicDescriptionProps {
  comic: Comic
}

export function ComicDescription({ comic }: ComicDescriptionProps) {
  if (!comic.description) return null

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Descrição</h2>
      <p className={styles.description}>{comic.description}</p>
    </div>
  )
}