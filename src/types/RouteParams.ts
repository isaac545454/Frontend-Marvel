export type RouteParams = Promise<{
  id: string
}>

export interface PageProps {
  params: RouteParams
}