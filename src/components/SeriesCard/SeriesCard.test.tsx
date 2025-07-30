import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SeriesCard } from './SeriesCard'
import { Series } from '@/types/Series'

// Mock do next/image
vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string, alt: string }) => <img src={src} alt={alt} />
}))

// Mock do next/link
vi.mock('next/link', () => ({
  default: ({ href, children, className }: { href: string, children: React.ReactNode, className: string }) => (
    <a href={href} className={className}>{children}</a>
  )
}))

// Mock do CSS Module
vi.mock('./SeriesCard.module.css', () => ({
  default: {
    link: 'link',
    card: 'card',
    image: 'image',
    imageContainer: 'imageContainer',
    info: 'info',
    title: 'title',
    creators: 'creators',
    years: 'years',
    rating: 'rating',
  }
}))

describe('SeriesCard', () => {
 const mockSeries: Series = {
  id: 1,
  title: 'Spider-Man (2023)',
  description: 'A new Spider-Man series.',
  startYear: 2023,
  endYear: 2024,
  rating: 'T+',
  thumbnail: {
    path: 'http://example.com/image',
    extension: 'jpg'
  },
  creators: {
    available: 2,
    items: [
      { name: 'Stan Lee', role: 'writer' },
      { name: 'Steve Ditko', role: 'artist' }
    ]
  }
}


  it('should render series title', () => {
    render(<SeriesCard series={mockSeries} />)
    expect(screen.getByText('Spider-Man (2023)')).toBeInTheDocument()
  })

  it('should render writer name when available', () => {
    render(<SeriesCard series={mockSeries} />)
    expect(screen.getByText('by Stan Lee')).toBeInTheDocument()
  })

  it('should render creator name when writer is not available', () => {
    const seriesWithCreator = {
      ...mockSeries,
      creators: {
        items: [
          { name: 'John Doe', role: 'creator' },
          { name: 'Steve Ditko', role: 'artist' }
        ]
      }
    }
    render(<SeriesCard series={seriesWithCreator} />)
    expect(screen.getByText('by John Doe')).toBeInTheDocument()
  })

  it('should not render creator when neither writer nor creator is available', () => {
    const seriesWithoutCreator = {
      ...mockSeries,
      creators: {
        items: [
          { name: 'Steve Ditko', role: 'artist' }
        ]
      }
    }
    render(<SeriesCard series={seriesWithoutCreator} />)
    expect(screen.queryByText(/by/)).not.toBeInTheDocument()
  })

  it('should render end year', () => {
    render(<SeriesCard series={mockSeries} />)
    expect(screen.getByText('2024')).toBeInTheDocument()
  })

  it('should render "Present" when end year is 0 or negative', () => {
    const ongoingSeries = {
      ...mockSeries,
      endYear: 0
    }
    render(<SeriesCard series={ongoingSeries} />)
    expect(screen.getByText('Present')).toBeInTheDocument()
  })

  it('should render rating when available', () => {
    render(<SeriesCard series={mockSeries} />)
    expect(screen.getByText('T+')).toBeInTheDocument()
  })

  it('should not render rating when not available', () => {
    const seriesWithoutRating = {
      ...mockSeries,
      rating: ''
    }
    render(<SeriesCard series={seriesWithoutRating} />)
    expect(screen.queryByText('T+')).not.toBeInTheDocument()
  })

  it('should render series image with correct src', () => {
    render(<SeriesCard series={mockSeries} />)
    const image = screen.getByAltText('Spider-Man (2023)')
    expect(image).toHaveAttribute('src', 'http://example.com/image.jpg')
  })

  it('should link to series details page', () => {
    render(<SeriesCard series={mockSeries} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/series/1')
  })

  it('should apply correct styles', () => {
    render(<SeriesCard series={mockSeries} />)

    expect(screen.getByRole('link')).toHaveClass('link')
    expect(screen.getByText('Spider-Man (2023)')).toHaveClass('title')
    expect(screen.getByText('by Stan Lee')).toHaveClass('creators')
    expect(screen.getByText('T+')).toHaveClass('rating')
  })
})
