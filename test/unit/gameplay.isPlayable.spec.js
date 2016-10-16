import { isPlayable } from '../../src/gameplay'

describe('isPlayable', function () {
  const _ = { isMasked: true, isFlagged: false, isBomb: false }
  const o = { isMasked: false, isFlagged: false, isBomb: false }
  const f = { isMasked: true, isFlagged: true, isBomb: false }
  const b = { isMasked: true, isFlagged: false, isBomb: true }
  const x = { isMasked: false, isFlagged: false, isBomb: true }

  it('returns true if no bombs are unmasked', function () {
    const matrix = [
      [o, o, b],
      [o, o, o],
      [o, o, o]
    ]

    expect(isPlayable(matrix)).toBe(true)
  })

  it('returns false if a bomb is exposed', function () {
    const matrix = [
      [o, o, x],
      [b, o, o],
      [o, o, o]
    ]

    expect(isPlayable(matrix)).toBe(false)
  })
})
