const fs = require("fs");

async function intoArray(filePath) {
  const contentString = await fs.readFileSync(filePath, "utf-8");

  return contentString.split("\n").filter((line) => line !== "");
}

function intoNumbers(filePath) {
  return intoArray(filePath).then((stringArray) =>
    stringArray.map((v) => parseInt(v, 10))
  );
}

module.exports = {
  intoArray,
  intoNumbers,
};
