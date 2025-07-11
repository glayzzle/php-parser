const parser = require("./main");

describe("Test versions", function () {
  it.each([
    { version: "7.3", expected: 703 },
    { version: "7.3.5", expected: 703 },
  ])("parse version number $version", ({ version, expected }) => {
    const test = parser.create({ version });
    expect(test.version).toEqual(expected);
  });

  it.each([
    { version: [701], expected: "Expecting a string or number for version" },
    { version: "x.y.z", expected: "Bad version number : x.y.z" },
    { version: "4.9", expected: "Can only handle versions between 5.x to 8.x" },
    { version: "9.9", expected: "Can only handle versions between 5.x to 8.x" },
  ])("fail to parse version $version", ({ version, expected }) => {
    expect(() => {
      parser.create({ version });
    }).toThrow(new Error(expected));
  });
});
