import { getCharacters } from '@/services/getCharacters'
import { CharacterCard } from '@/components/CharacterCard/CharacterCard'
import { Pagination } from '@/components/Pagination/Pagination'
import { getPageParam } from '@/lib/getPageParam'
import { PageProps } from '@/types/Pagination'
import styles from './CharactersGrid.module.css'

export default async function CharactersGrid({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  const page = getPageParam(resolvedParams)
  const { characters, totalPages } = await getCharacters(page)

  return (
    <div className={styles.charactersContainer}>
      <div className={styles.charactersGrid}>
        {characters.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  )
}