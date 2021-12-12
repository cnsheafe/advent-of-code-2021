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

const sum = (depthReadings) => {
  const measurements = [];
  for (let i = 0; i < depthReadings.length; i++) {
    const window = depthReadings.slice(i, i + 3);
    const measurement = S.compose(S.sum)(
      S.filter((reading) => typeof reading === "number")
    )(window);

    measurements.push(measurement);
  }

  return measurements;
};

const withWindow = S.compose(countDepthIncreases)(sum);
const countDepthIncreasesWithWindow =
  S.compose(withWindow)(readInputIntoNumbers);

module.exports = {
  countDepthIncreases,
  countDepthIncreasesFromInput,
  withWindow,
  countDepthIncreasesWithWindow,
};
