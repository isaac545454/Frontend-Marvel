import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComicCard } from './ComicCard'

// Mock do next/image
vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string, alt: string }) => <img src={src} alt={alt} />
}))

// Mock do next/link
vi.mock('next/link', () => ({
  default: ({ children, href, className }: { children: React.ReactNode, href: string, className: string }) => (
    <a href={href} className={className}>{children}</a>
  )
}))

describe('ComicCard', () => {
  const mockComic = {
    id: 1,
    title: 'Amazing Spider-Man #1',
    thumbnail: {
      path: 'http://example.com/image',
      extension: 'jpg'
    },
    creators: {
      items: [
        { name: 'Stan Lee', role: 'writer' },
        { name: 'Steve Ditko', role: 'artist' }
      ]
    },
    prices: [
      { type: 'printPrice', price: 3.99 },
      { type: 'digitalPurchasePrice', price: 2.99 }
    ]
  }

  it('should render comic title', () => {
    render(<ComicCard comic={mockComic} />)
    expect(screen.getByText('Amazing Spider-Man #1')).toBeInTheDocument()
  })

  it('should render writer name when available', () => {
    render(<ComicCard comic={mockComic} />)
    expect(screen.getByText('by Stan Lee')).toBeInTheDocument()
  })

  it('should not render writer when not available', () => {
    const comicWithoutWriter = {
      ...mockComic,
      creators: {
        items: [{ name: 'Steve Ditko', role: 'artist' }]
      }
    }
    render(<ComicCard comic={comicWithoutWriter} />)
    expect(screen.queryByText(/by/)).not.toBeInTheDocument()
  })

  it('should render print price when available', () => {
    render(<ComicCard comic={mockComic} />)
    expect(screen.getByText('$3.99')).toBeInTheDocument()
  })

  it('should render digital price when print price is not available', () => {
    const comicWithoutPrintPrice = {
      ...mockComic,
      prices: [
        { type: 'digitalPurchasePrice', price: 2.99 }
      ]
    }
    render(<ComicCard comic={comicWithoutPrintPrice} />)
    expect(screen.getByText('$2.99')).toBeInTheDocument()
  })

  it('should render $0.00 when no prices are available', () => {
    const comicWithoutPrices = {
      ...mockComic,
      prices: []
    }
    render(<ComicCard comic={comicWithoutPrices} />)
    expect(screen.getByText('$0.00')).toBeInTheDocument()
  })

  it('should render comic image with correct src', () => {
    render(<ComicCard comic={mockComic} />)
    const image = screen.getByAltText('Amazing Spider-Man #1')
    expect(image).toHaveAttribute('src', 'http://example.com/image.jpg')
  })

  it('should link to comic details page', () => {
    render(<ComicCard comic={mockComic} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/comics/1')
  })
})