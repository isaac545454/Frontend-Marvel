import styles from './SeriesDetails.module.css'

interface Creator {
  name: string
  role: string
}

interface SeriesCreatorsProps {
  creators: {
    available: number
    items: Creator[]
  }
}

export function SeriesCreators({ creators }: SeriesCreatorsProps) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Creators</h2>
      <div className={styles.creators}>
        {creators.items.map((creator, index) => (
          <div key={index} className={styles.creator}>
            <span className={styles.creatorName}>{creator.name}</span>
            <span className={styles.creatorRole}>{creator.role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}