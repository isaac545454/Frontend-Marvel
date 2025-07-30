import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ActiveLink } from './ActiveLink'

// Mock do next/navigation
vi.mock('next/navigation', () => ({
  usePathname: vi.fn()
}))

// Mock do next/link
vi.mock('next/link', () => ({
  default: ({ children, className }: { children: React.ReactNode, className: string }) => (
    <a className={className}>{children}</a>
  )
}))

import { usePathname } from 'next/navigation'

describe('ActiveLink', () => {
  it('should render correctly', () => {
    vi.mocked(usePathname).mockReturnValue('/other')
    
    render(
      <ActiveLink href="/test">
        Test Link
      </ActiveLink>
    )
    
    const link = screen.getByText('Test Link')
    expect(link).toBeInTheDocument()
  })

  it('should apply active class when current path matches href', () => {
    vi.mocked(usePathname).mockReturnValue('/test')
    
    render(
      <ActiveLink href="/test">
        Test Link
      </ActiveLink>
    )
    
    const link = screen.getByText('Test Link')
    expect(link.className).toContain('active')
  })

  it('should not apply active class when current path does not match href', () => {
    vi.mocked(usePathname).mockReturnValue('/other')
    
    render(
      <ActiveLink href="/test">
        Test Link
      </ActiveLink>
    )
    
    const link = screen.getByText('Test Link')
    expect(link.className).not.toContain('active')
  })

  it('should merge custom className with default classes', () => {
    vi.mocked(usePathname).mockReturnValue('/other')
    
    render(
      <ActiveLink href="/test" className="custom-class">
        Test Link
      </ActiveLink>
    )
    
    const link = screen.getByText('Test Link')
    expect(link.className).toContain('custom-class')
    expect(link.className).toContain('link')
  })
})