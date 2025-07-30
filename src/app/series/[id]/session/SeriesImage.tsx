import Image from 'next/image'
import { Thumbnail } from '@/types/Thumbnail'
import styles from './SeriesDetails.module.css'

interface SeriesImageProps {
  thumbnail: Thumbnail
  title: string
}

export function SeriesImage({ thumbnail, title }: SeriesImageProps) {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={title}
        className={styles.image}
        fill
        sizes="(max-width: 768px) 300px, 400px"
      />
    </div>
  )
}