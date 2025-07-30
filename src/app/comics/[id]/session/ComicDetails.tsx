import { getComicById } from '@/services/getComicById'
import { ComicImage } from './ComicImage'
import { ComicDescription } from './ComicDescription'
import { ComicInfo } from './ComicInfo'
import { ComicCreators } from './ComicCreators'
import styles from './ComicDetails.module.css'

interface ComicDetailsProps {
  params: {
    id: string
  }
}

export default async function ComicDetails({ params }: ComicDetailsProps) {
  const comic = await getComicById(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ComicImage comic={comic} />

        <div className={styles.info}>
          <h1 className={styles.title}>{comic.title}</h1>
          <ComicDescription comic={comic} />
          <ComicInfo comic={comic} />
          <ComicCreators comic={comic} />
        </div>
      </div>
    </div>
  )
}