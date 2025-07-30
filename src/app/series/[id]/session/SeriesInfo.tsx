import styles from './SeriesDetails.module.css'

interface SeriesInfoProps {
  rating: string
}

export function SeriesInfo({ rating }: SeriesInfoProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Details</h2>
      <div className={styles.details}>
        <div className={styles.detail}>
          <span className={styles.detailLabel}>Rating</span>
          <span className={styles.detailValue}>{rating || 'Not rated'}</span>
        </div>
      </div>
    </div>
  )
}