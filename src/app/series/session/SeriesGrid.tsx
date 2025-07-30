import { getSeries } from '@/services/getSeries'
import { SeriesCard } from '@/components/SeriesCard/SeriesCard'
import styles from './SeriesGrid.module.css'

interface SeriesGridProps {
  page: number
}

export default async function SeriesGrid({ page }: SeriesGridProps) {
  const series = await getSeries(page)

  return (
    <div className={styles.seriesContainer}>
      <div className="container">
        <div className={styles.grid}>
          {series.map(series => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>
      </div>
    </div>
  )
} 