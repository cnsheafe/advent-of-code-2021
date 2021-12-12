const path = require("path");
const { countDepthIncreases, countDepthIncreasesFromInput } = require("./1");

describe("day 1", () => {
  test("counts number of times depth has decreased", () => {
    const depthReadings = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    expect(countDepthIncreases(depthReadings)).toBe(7);
  });

  test("count depth decreases from provided input", async () => {
    const filePath = path.resolve("1", "input");
    const count = await countDepthIncreasesFromInput(filePath);

    expect(count).toMatchSnapshot();
  });
});
