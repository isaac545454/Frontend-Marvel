import styles from './GridCardSkeleton.module.css'

interface GridCardSkeletonProps {
  count?: number
}

export function GridCardSkeleton({ count = 12 }: GridCardSkeletonProps) {
  return (
    <div className={styles.grid}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.imageContainer} />
          <div className={styles.content}>
            <div className={styles.title} />
            <div className={styles.text} />
            <div className={styles.textSmall} />
          </div>
        </div>
      ))}
    </div>
  )
}