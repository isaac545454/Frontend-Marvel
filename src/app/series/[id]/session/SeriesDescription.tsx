import styles from './SeriesDetails.module.css'

interface SeriesDescriptionProps {
  description: string | null
}

export function SeriesDescription({ description }: SeriesDescriptionProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Description</h2>
      <p className={styles.description}>{description || 'No description available.'}</p>
    </div>
  )
}