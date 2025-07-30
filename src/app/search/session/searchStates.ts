export type SearchState = 'queryNot' | 'noResults' | 'results'

import { Character } from '@/types/Character'

export interface SearchStateConfig {
  state: SearchState
  data?: {
    query?: string
    characters?: Character[]
    currentPage?: number
    totalPages?: number
  }
}

const searchStates = {
  queryNot: (): SearchStateConfig => ({
    state: 'queryNot'
  }),
  noResults: (query: string): SearchStateConfig => ({
    state: 'noResults',
    data: { query }
  }),
  results: (query: string, characters: Character[], currentPage: number, totalPages: number): SearchStateConfig => ({
    state: 'results',
    data: {
      query,
      characters,
      currentPage,
      totalPages
    }
  })
}

export function getSearchState(query: string | undefined, characters: Character[] = [], currentPage = 1, totalPages = 1): SearchStateConfig {
  if (!query?.trim()) {
    return searchStates.queryNot()
  }

  if (characters.length === 0) {
    return searchStates.noResults(query)
  }

  return searchStates.results(query, characters, currentPage, totalPages)
}