import styles from './DetailsSkeleton.module.css'

export function DetailsSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={`${styles.title} ${styles.skeleton}`} />
        <div className={styles.externalLinks}>
          {[1, 2, 3].map(i => (
            <div key={i} className={`${styles.externalLink} ${styles.skeleton}`} />
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={`${styles.image} ${styles.skeleton}`} />

        <div className={styles.info}>
          <div className={styles.section}>
            <div className={`${styles.description} ${styles.skeleton}`} />
          </div>

          <div className={styles.stats}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`${styles.stat} ${styles.skeleton}`} />
            ))}
          </div>

          <div className={styles.section}>
            <div className={`${styles.sectionTitle} ${styles.skeleton}`} />
            <div className={styles.list}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`${styles.listItem} ${styles.skeleton}`} />
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={`${styles.sectionTitle} ${styles.skeleton}`} />
            <div className={styles.list}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`${styles.listItem} ${styles.skeleton}`} />
              ))}
            </div>
          </div>

          <div className={styles.footer}>
            <div className={`${styles.skeleton}`} />
          </div>
        </div>
      </div>
    </div>
  )
}