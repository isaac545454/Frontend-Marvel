import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Extende os matchers do Vitest com os do @testing-library/jest-dom
expect.extend(matchers)

// Limpa após cada teste
afterEach(() => {
  cleanup()
})