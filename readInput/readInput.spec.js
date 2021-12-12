const path = require("path");
const { intoArray, intoNumbers } = require("./readInput");

describe("readInput", () => {
  describe("intoArray", () => {
    test("should read the input into an array", async () => {
      const filePath = path.resolve("readInput", "sampleInput");
      const input = await intoArray(filePath);

      expect(Array.isArray(input)).toBe(true);
      expect(input).toHaveLength(3);
    });
  });

  describe("intoNumbers", () => {
    test("should read input into an array of numbers", async () => {
      const filePath = path.resolve("readInput", "sampleInput");
      const input = await intoNumbers(filePath);

      expect(Array.isArray(input)).toBe(true);
      expect(input).toHaveLength(3);
      expect(input).toEqual([123, 456, 789]);
    });
  });
});
