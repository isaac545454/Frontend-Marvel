import { Suspense } from 'react'
import CharactersGrid from './session/CharactersGrid'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { GridCardSkeleton } from '@/components/GridCardSkeleton/GridCardSkeleton'
import { PageProps } from '@/types/Pagination'

export default function CharactersPage({ searchParams }: PageProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<GridCardSkeleton count={15} />}>
        <CharactersGrid searchParams={searchParams} />
      </Suspense>
    </ErrorBoundary>
  )
}