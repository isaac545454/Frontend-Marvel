import { getComics } from '@/services/getComics'
import { ComicCard } from '@/components/ComicCard/ComicCard'
import styles from './ComicsGrid.module.css'

interface ComicsGridProps {
  page: number
}

export default async function ComicsGrid({ page }: ComicsGridProps) {
  const comics = await getComics(page)

  return (
    <div className={styles.comicsContainer}>
      <div className="container">
        <div className={styles.grid}>
          {comics.map(comic => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </div>
    </div>
  )
} 