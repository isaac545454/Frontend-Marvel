import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import CharacterDetails from './session/CharacterDetails'
import { GridCardSkeleton } from '@/components/GridCardSkeleton/GridCardSkeleton'

interface CharacterPageProps {
  params: {
    id: string
  }
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const resolvedParams = await params

  return (
    <ErrorBoundary>
      <Suspense fallback={<GridCardSkeleton count={1} />}>
        <CharacterDetails id={resolvedParams.id} />
      </Suspense>
    </ErrorBoundary>
  )
}