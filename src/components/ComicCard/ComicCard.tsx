import Image from 'next/image'
import { Comic } from '@/types/Comic'
import { formatPrice } from '@/lib/formatPrice'
import styles from './ComicCard.module.css'

interface ComicCardProps {
  comic: Comic
}

export function ComicCard({ comic }: ComicCardProps) {
  const writer = comic.creators.items.find(creator => creator.role === 'writer')
  const printPrice = comic.prices.find(p => p.type === 'printPrice')?.price || 0
  const digitalPrice = comic.prices.find(p => p.type === 'digitalPurchasePrice')?.price || 0
  const bestPrice = printPrice > 0 ? printPrice : digitalPrice

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{comic.title}</h3>
        {writer && (
          <p className={styles.creators}>by {writer.name}</p>
        )}
        <p className={styles.price}>{formatPrice(bestPrice)}</p>
      </div>
    </div>
  )
} 