import fs from 'fs'
import S from '../S'

function readInputIntoArray (filePath) {
  const contentString = fs.readFileSync(filePath, 'utf-8')
  const filterEmptyLines = S.filter((line) => line !== '')
  const toArray = S.compose(filterEmptyLines)(S.splitOn('\n'))

  return toArray(contentString)
}

const mapToNumbers = S.map(S.parseInt(10))
const toNumber = S.compose(S.justs)(mapToNumbers)
const readInputIntoNumbers = S.compose(toNumber)(readInputIntoArray)

module.exports = {
  readInputIntoArray,
  readInputIntoNumbers
}
