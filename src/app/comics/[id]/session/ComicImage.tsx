import { Comic } from '@/types/Comic'
import Image from 'next/image'
import styles from './ComicDetails.module.css'

interface ComicImageProps {
  comic: Comic
}

export function ComicImage({ comic }: ComicImageProps) {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        width={500}
        height={500}
        className={styles.image}
      />
    </div>
  )
}