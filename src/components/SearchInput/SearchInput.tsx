'use client'

import { FormEvent, useState } from 'react'
import styles from './SearchInput.module.css'
import { PageSearchParams } from '@/types/Pagination'

interface SearchInputProps {
  defaultValue?: string
  searchParams?: PageSearchParams
}

export function SearchInput({ defaultValue = '' }: SearchInputProps) {
  const [search, setSearch] = useState(defaultValue)

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!search.trim()) {
      return
    }

    window.location.href = `/search?q=${encodeURIComponent(search)}`
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