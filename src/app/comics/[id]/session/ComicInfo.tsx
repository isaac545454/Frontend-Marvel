import { Comic } from '@/types/Comic'
import { formatDate } from '@/lib/date'
import { formatPrice } from '@/lib/formatPrice'
import styles from './ComicDetails.module.css'

interface ComicInfoProps {
  comic: Comic
}

export function ComicInfo({ comic }: ComicInfoProps) {
  const publishDate = comic.dates.find(date => date.type === 'onsaleDate')?.date
  const formattedDate = publishDate ? formatDate(publishDate) : 'Data não disponível'
  const price = comic.prices.find(price => price.type === 'printPrice')?.price || 0
  const formattedPrice = formatPrice(price)

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>Detalhes</h2>
      <div className={styles.details}>
        <div className={styles.detail}>
          <span className={styles.detailLabel}>Preço:</span>
          <span className={styles.detailValue}>{formattedPrice}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.detailLabel}>Data de Publicação:</span>
          <span className={styles.detailValue}>{formattedDate}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.detailLabel}>Páginas:</span>
          <span className={styles.detailValue}>{comic.pageCount || 'Não informado'}</span>
        </div>
      </div>
    </div>
  )
}