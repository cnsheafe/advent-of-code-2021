import S from '../S'
import { readInputIntoArray } from '../readInput/readInput'

export const toCommands = S.map((row) => {
  const [direction, distance] = row.split(' ')

  return { direction, distance: parseInt(distance, 10) }
})

// const readInputIntoCommands = S.compose(toCommands)(readInputIntoArray);
const calcDepth = (direction) => {
  switch (direction) {
    case 'forward':
      return (distance) => ({ horizontal: S.add(distance), depth: S.I })
    case 'up':
      return (distance) => ({ horizontal: S.I, depth: S.sub(distance) })
    case 'down':
    default:
      return (distance) => ({ horizontal: S.I, depth: S.add(distance) })
  }
}

const getPositions = S.reduce(
  (acc) =>
    ({ direction, distance }) =>
      S.ap(calcDepth(direction)(distance))(acc)
)({ depth: 0, horizontal: 0 })

const calcFinalPosition = ({ depth, horizontal }) => depth * horizontal

export const getFinalPosition = S.compose(
  S.compose(calcFinalPosition)(getPositions)
)(toCommands)

const getFinalPositionFromInput =
  S.compose(getFinalPosition)(readInputIntoArray)

export default getFinalPositionFromInput
