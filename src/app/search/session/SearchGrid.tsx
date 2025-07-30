import { CharacterCard } from '@/components/CharacterCard/CharacterCard'
import { Pagination } from '@/components/Pagination/Pagination'
import { Character } from '@/types/Character'
import styles from './SearchGrid.module.css'

interface SearchGridProps {
  characters: Character[]
  currentPage: number
  totalPages: number
}

export function SearchGrid({ characters, currentPage, totalPages }: SearchGridProps) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {characters.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}