import { searchCharacters } from '@/services/searchCharacters'
import { getPageParam } from '@/lib/getPageParam'
import { PageProps } from '@/types/Pagination'
import { NoResults } from './NoResults'
import { SearchGrid } from './SearchGrid'
import { getSearchState } from './searchStates'

export async function SearchResults({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  const query = resolvedParams?.q?.toString() ?? ''
  const page = getPageParam(resolvedParams)

  const { characters = [], totalPages = 1 } = !query 
    ? { characters: [], totalPages: 1 }
    : await searchCharacters(query, page)

  const state = getSearchState(query, characters, page, totalPages)

  const Component = {
    queryNot: NoResults,
    noResults: NoResults,
    results: SearchGrid
  }[state.state]

  return  (
    <Component 
          characters={state.data!.characters!}
          currentPage={state.data!.currentPage!}
          totalPages={state.data!.totalPages!} 
          state={state}    
          />
  )  
}