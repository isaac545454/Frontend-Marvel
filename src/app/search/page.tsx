import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { GridCardSkeleton } from '@/components/GridCardSkeleton/GridCardSkeleton'
import { SearchInput } from '@/components/SearchInput/SearchInput'
import { SearchResults } from './session/SearchResults'
import { PageProps } from '@/types/Pagination'
import { PageContainer } from '@/components/PageContainer/PageContainer'

export default function SearchPage({ searchParams }: PageProps) {
  return (
    <ErrorBoundary>
      <PageContainer>
        <SearchInput defaultValue={searchParams?.q?.toString()} />
        <Suspense fallback={<GridCardSkeleton count={15} />}>
          <SearchResults searchParams={searchParams} />
        </Suspense>
      </PageContainer>
    </ErrorBoundary>
  )
}