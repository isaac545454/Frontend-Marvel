import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import CharacterDetails from './session/CharacterDetails'
import { DetailsSkeleton } from '@/components/DetailsSkeleton/DetailsSkeleton'

interface CharacterPageProps {
  params: {
    id: string
  }
}

export default function CharacterPage({ params }: CharacterPageProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<DetailsSkeleton  />}>
        <CharacterDetails params={params} />
      </Suspense>
    </ErrorBoundary>
  )
}