import { describe, it, expect } from 'vitest'
import { getPageParam } from '../getPageParam'
import { ReadonlyURLSearchParams } from 'next/navigation'

describe('getPageParam', () => {
  it('should return 1 when no params are provided', () => {
    expect(getPageParam()).toBe(1)
    expect(getPageParam(null)).toBe(1)
  })

  it('should handle ReadonlyURLSearchParams', () => {
    const params = new URLSearchParams('page=2')
    const readonlyParams = new ReadonlyURLSearchParams(params)
    expect(getPageParam(readonlyParams)).toBe(2)
  })

  it('should handle PageSearchParams with string', () => {
    expect(getPageParam({ page: '3' })).toBe(3)
  })

  it('should handle PageSearchParams with array', () => {
    expect(getPageParam({ page: ['4'] })).toBe(4)
  })

  it('should return 1 for invalid page numbers', () => {
    expect(getPageParam({ page: '0' })).toBe(1)
    expect(getPageParam({ page: '-1' })).toBe(1)
    expect(getPageParam({ page: 'abc' })).toBe(1)
  })

  it('should handle empty page parameter', () => {
    expect(getPageParam({ page: '' })).toBe(1)
  })
})