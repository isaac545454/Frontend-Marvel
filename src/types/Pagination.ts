export type PageSearchParams = {
  page?: string
  q?: string
  [key: string]: string | undefined
}

export interface PageProps {
  searchParams: PageSearchParams
} 