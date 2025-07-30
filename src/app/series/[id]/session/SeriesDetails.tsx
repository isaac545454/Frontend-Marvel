import { getSeriesById } from '@/services/getSeriesById'
import styles from './SeriesDetails.module.css'
import { SeriesImage } from './SeriesImage'
import { SeriesHeader } from './SeriesHeader'
import { SeriesDescription } from './SeriesDescription'
import { SeriesInfo } from './SeriesInfo'
import { SeriesCreators } from './SeriesCreators'

interface SeriesDetailsProps {
  params: {
    id: string
  }
}

export async function SeriesDetails({ params }: SeriesDetailsProps) {
  const series = await getSeriesById(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SeriesImage thumbnail={series.thumbnail} title={series.title} />
        <div className={styles.info}>
          <SeriesHeader title={series.title} startYear={series.startYear} endYear={series.endYear} />
          <SeriesDescription description={series.description} />
          <SeriesInfo rating={series.rating} />
          <SeriesCreators creators={series.creators} />
        </div>
      </div>
    </div>
  )
}