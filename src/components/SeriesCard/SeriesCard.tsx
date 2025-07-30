import Image from 'next/image'
import { Series } from '@/types/Series'
import styles from './SeriesCard.module.css'

interface SeriesCardProps {
  series: Series
}

export function SeriesCard({ series }: SeriesCardProps) {
  const creator = series.creators.items.find(creator => creator.role === 'writer' || creator.role === 'creator')
  
  const getEndYear = () => {
    if (series.endYear <= 0) return 'Present'
    return series.endYear.toString()
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
          alt={series.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{series.title}</h3>
        {creator && (
          <p className={styles.creators}>by {creator.name}</p>
        )}
        <p className={styles.years}>{getEndYear()}</p>
        {series.rating && (
          <p className={styles.rating}>{series.rating}</p>
        )}
      </div>
    </div>
  )
} 