import { ReadonlyURLSearchParams } from 'next/navigation'
import { PageSearchParams } from '@/types/Pagination'

export function getPageParam(
  searchParams?: PageSearchParams | ReadonlyURLSearchParams | null
): number {
  if (!searchParams) return 1

  const pageValue = searchParams instanceof ReadonlyURLSearchParams
    ? searchParams.get('page')
    : Array.isArray(searchParams.page)
      ? searchParams.page[0]
      : searchParams.page

  const parsed = Number(pageValue)
  return isNaN(parsed) || parsed < 1 ? 1 : parsed
} 