export interface MarvelResponse<T> {
  code: number
  status: string
  data: {
    offset: number
    limit: number
    total: number
    count: number
    results: T[]
  }
}