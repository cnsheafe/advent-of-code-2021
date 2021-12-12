const { intoNumbers } = require("../readInput/readInput");

function countDepthIncreases(depthReadings) {
  let count = 0;

  for (let i = 0; i < depthReadings.length; i++) {
    if (depthReadings[i] > depthReadings[i - 1]) {
      count += 1;
    }
  }

  return count;
}

async function countDepthIncreasesFromInput(filePath) {
  const depthReadings = await intoNumbers(filePath);

  return countDepthIncreases(depthReadings);
}

module.exports = {
  countDepthIncreases,
  countDepthIncreasesFromInput,
};
