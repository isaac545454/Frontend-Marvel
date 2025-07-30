import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { SearchInput } from './SearchInput'

describe('SearchInput', () => {
  it('should render correctly', () => {
    const onSearch = vi.fn()
    render(<SearchInput onSearch={onSearch} />)
    
    const input = screen.getByPlaceholderText('Search Marvel characters...')
    expect(input).toBeInTheDocument()
  })

  it('should call onSearch when user types', () => {
    const onSearch = vi.fn()
    render(<SearchInput onSearch={onSearch} />)
    
    const input = screen.getByPlaceholderText('Search Marvel characters...')
    fireEvent.change(input, { target: { value: 'Spider' } })
    
    expect(onSearch).toHaveBeenCalledWith('Spider')
  })
})