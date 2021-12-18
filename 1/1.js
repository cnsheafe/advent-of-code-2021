import S from "../S";
import { readInputIntoNumbers } from "../readInput/readInput";

export function countDepthIncreases(depthReadings) {
  let count = 0;

  for (let i = 0; i < depthReadings.length; i++) {
    if (depthReadings[i] > depthReadings[i - 1]) {
      count += 1;
    }
  }

  return count;
}

export const countDepthIncreasesFromInput =
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

export const withWindow = S.compose(countDepthIncreases)(sum);

export const countDepthIncreasesWithWindow =
  S.compose(withWindow)(readInputIntoNumbers);
