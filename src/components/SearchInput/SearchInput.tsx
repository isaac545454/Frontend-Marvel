'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './SearchInput.module.css'

interface SearchInputProps {
  defaultValue?: string
}

export function SearchInput({ defaultValue = '' }: SearchInputProps) {
  const [search, setSearch] = useState(defaultValue)
  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!search.trim()) {
      return
    }

    router.push(`/search?q=${encodeURIComponent(search)}`)
  }

  return (
    <form onSubmit={handleSearch} className={styles.searchContainer}>
      <input
        type="text"
        name="search"
        placeholder="Search characters..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchInput}
      />
    </form>
  )
}