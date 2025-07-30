import { getComics } from '@/services/getComics'
import { ComicCard } from '@/components/ComicCard/ComicCard'
import { Pagination } from '@/components/Pagination/Pagination'
import { getPageParam } from '@/lib/getPageParam'
import { PageProps } from '@/types/Pagination'
import styles from './ComicsGrid.module.css'

export default async function ComicsGrid({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  const page = getPageParam(resolvedParams)
  const { comics, totalPages } = await getComics(page)

  return (
    <div className={styles.comicsContainer}>
      <div className="container">
        <div className={styles.grid}>
          {comics.map(comic => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
} 