import path from 'path'
import {
  countDepthIncreases,
  countDepthIncreasesFromInput,
  countDepthIncreasesWithWindow,
  withWindow
} from './1'

describe('day 1', () => {
  describe('part 1', () => {
    test('counts number of times depth has increased', () => {
      const depthReadings = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

      expect(countDepthIncreases(depthReadings)).toBe(7)
    })

    test('count depth increases from provided input', () => {
      const filePath = path.resolve('1', 'input')
      const count = countDepthIncreasesFromInput(filePath, 'utf-8')

      expect(count).toMatchSnapshot()
    })
  })

  describe('part 2 -- sliding window', () => {
    test('counts number of times depth has increased', () => {
      const depthReadings = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

      expect(withWindow(depthReadings)).toBe(5)
    })

    test('count depth increases from provided input', () => {
      const filePath = path.resolve('1', 'input')
      const count = countDepthIncreasesWithWindow(filePath, 'utf-8')

      expect(count).toMatchSnapshot()
    })
  })
})
