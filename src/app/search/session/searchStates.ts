export type SearchState = 'queryNot' | 'noResults' | 'results'

interface SearchStateConfig {
  state: SearchState
  data?: {
    query?: string
    characters?: any[]
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
  results: (query: string, characters: any[], currentPage: number, totalPages: number): SearchStateConfig => ({
    state: 'results',
    data: {
      query,
      characters,
      currentPage,
      totalPages
    }
  })
}

export function getSearchState(query: string | undefined, characters: any[] = [], currentPage = 1, totalPages = 1): SearchStateConfig {
  if (!query?.trim()) {
    return searchStates.queryNot()
  }

  if (characters.length === 0) {
    return searchStates.noResults(query)
  }

  return searchStates.results(query, characters, currentPage, totalPages)
}