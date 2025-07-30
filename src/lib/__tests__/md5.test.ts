import { describe, it, expect, vi } from 'vitest'
import crypto from 'crypto'

describe('md5', () => {
  it('deve retornar ts, hash e apikey corretamente', async () => {
    // 1. Mock das variáveis de ambiente ANTES do import
    vi.stubEnv('NEXT_PUBLIC_MARVEL_PUBLIC_KEY', 'public_key_test')
    vi.stubEnv('MARVEL_PRIVATE_KEY', 'private_key_test')

    // 2. Fixa o timestamp
    const fakeTimestamp = 1710936000000
    vi.useFakeTimers().setSystemTime(fakeTimestamp)

    const expectedString = `${fakeTimestamp}private_key_testpublic_key_test`
    const expectedHash = crypto.createHash('md5').update(expectedString).digest('hex')

    // 3. Importa dinâmico depois do mock
    const { md5 } = await import('../md5')

    const result = md5()

    expect(result).toEqual({
      ts: fakeTimestamp,
      hash: expectedHash,
      apikey: 'public_key_test',
    })

    vi.useRealTimers()
  })
})
