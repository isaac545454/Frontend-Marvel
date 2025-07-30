import { Comic } from '@/types/Comic'
import styles from './ComicDetails.module.css'

interface ComicImageProps {
  comic: Comic
}

export function ComicImage({ comic }: ComicImageProps) {
  return (
    <div className={styles.imageContainer}>
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        className={styles.image}
      />
    </div>
  )
}