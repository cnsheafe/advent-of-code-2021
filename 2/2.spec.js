import path from "path";
import getFinalPositionFromInput, { getFinalPosition, toCommands } from "./2";

describe("day 2", () => {
  const input = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2",
  ];

  describe("part 1", () => {
    describe("getFinalPositionFromInput", () => {
      test("should get the final position from provided input", () => {
        const filePath = path.resolve("2", "input");
        const finalPosition = getFinalPositionFromInput(filePath, "utf-8");

        expect(finalPosition).toMatchSnapshot();
      });
    });
  });

  describe("getFinalPosition", () => {
    it("should get final position", () => {
      const finalPosition = getFinalPosition(input);

      expect(finalPosition).toBe(150);
    });
  });

  describe("toCommands", () => {
    it("should return an array of commands to direct the submarines position and depth", () => {
      const cmds = toCommands(input);

      expect(cmds).toEqual([
        { direction: "forward", distance: 5 },
        { direction: "down", distance: 5 },
        { direction: "forward", distance: 8 },
        { direction: "up", distance: 3 },
        { direction: "down", distance: 8 },
        { direction: "forward", distance: 2 },
      ]);
    });
  });
});
