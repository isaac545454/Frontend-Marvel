import { Suspense } from 'react'
import CharactersGrid from './session/CharactersGrid'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { GridCardSkeleton } from '@/components/GridCardSkeleton/GridCardSkeleton'
import { PageProps } from '@/types/Pagination'
import { SearchInput } from '@/components/SearchInput/SearchInput'
import { PageContainer } from '@/components/PageContainer/PageContainer'

export default function CharactersPage({ searchParams }: PageProps) {
  return (
    <ErrorBoundary>
      <PageContainer>
        <SearchInput />
        <Suspense fallback={<GridCardSkeleton count={15} />}>
          <CharactersGrid searchParams={searchParams} />
        </Suspense>
      </PageContainer>
    </ErrorBoundary>
  )
}