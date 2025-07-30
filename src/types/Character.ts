import { Thumbnail } from './Thumbnail'
import { MediaItem } from './MediaItem'

type ResourceList = {
    available: number
    items: MediaItem[]
}

type Url = {
    type: string
    url: string
}

export type Character = {
    id: number
    name: string
    description: string
    modified: string
    thumbnail: Thumbnail
    comics: ResourceList
    series: ResourceList
    stories: ResourceList
    events: ResourceList
    urls: Url[]
} 