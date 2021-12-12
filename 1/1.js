const S = require("../S");
const { readInputIntoNumbers } = require("../readInput/readInput");

function countDepthIncreases(depthReadings) {
  let count = 0;

  for (let i = 0; i < depthReadings.length; i++) {
    if (depthReadings[i] > depthReadings[i - 1]) {
      count += 1;
    }
  }

  return count;
}

const countDepthIncreasesFromInput =
  S.compose(countDepthIncreases)(readInputIntoNumbers);

module.exports = {
  countDepthIncreases,
  countDepthIncreasesFromInput,
};
