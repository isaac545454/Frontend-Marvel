import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import CharacterDetails from './session/CharacterDetails'
import { DetailsSkeleton } from '@/components/DetailsSkeleton/DetailsSkeleton'

import { PageProps } from '@/types/RouteParams'

export default function CharacterPage({ params }: PageProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<DetailsSkeleton  />}>
        <CharacterDetails params={params} />
      </Suspense>
    </ErrorBoundary>
  )
}