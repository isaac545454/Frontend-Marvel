import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { GridCardSkeleton } from '@/components/GridCardSkeleton/GridCardSkeleton'
import { SearchInput } from '@/components/SearchInput/SearchInput'
import { SearchResults } from './session/SearchResults'
import { PageProps } from '@/types/Pagination'
import { PageContainer } from '@/components/PageContainer/PageContainer'

export default async function SearchPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams
  
  return (
    <ErrorBoundary>
      <PageContainer>
        <SearchInput defaultValue={resolvedParams.q} />
        <Suspense fallback={<GridCardSkeleton count={15} />}>
          <SearchResults searchParams={resolvedParams} />
        </Suspense>
      </PageContainer>
    </ErrorBoundary>
  )
}