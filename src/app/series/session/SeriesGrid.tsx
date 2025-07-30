import { getSeries } from '@/services/getSeries'
import { SeriesCard } from '@/components/SeriesCard/SeriesCard'
import { Pagination } from '@/components/Pagination/Pagination'
import { getPageParam } from '@/lib/getPageParam'
import { PageProps } from '@/types/Pagination'
import styles from './SeriesGrid.module.css'

export default async function SeriesGrid({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  const page = getPageParam(resolvedParams)
  const { series, totalPages } = await getSeries(page)

  return (
    <div className={styles.seriesContainer}>
      <div className="container">
        <div className={styles.grid}>
          {series.map(serie => (
            <SeriesCard key={serie.id} series={serie} />
          ))}
        </div>
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
    </div>
  )
} 