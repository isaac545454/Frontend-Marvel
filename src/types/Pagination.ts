export type PageSearchParams = {
  [key: string]: string | string[] | undefined
}

export interface PageProps {
  searchParams: Promise<PageSearchParams>
} 