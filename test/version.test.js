const parser = require("./main");

describe("Test versions", function () {
  it("unserialize a version string", function () {
    const test = parser.create({
      parser: {
        version: "7.3",
      },
    });
    expect(test.parser.version).toEqual(703);
  });
  it("unserialize a version string - with bugfix ignored", function () {
    const test = parser.create({
      parser: {
        version: "7.3.5",
      },
    });
    expect(test.parser.version).toEqual(703);
  });
  it("fail to parse array", function () {
    expect(
      parser.create.bind(null, {
        parser: {
          version: [701],
        },
      })
    ).toThrow(new Error("Expecting a number for version"));
  });
  it("fail to parse bad version numbers", function () {
    expect(
      parser.create.bind(null, {
        parser: {
          version: "x.y.z",
        },
      })
    ).toThrow(new Error("Bad version number : x.y.z"));
  });
  it("unhandled version", function () {
    expect(
      parser.create.bind(null, {
        parser: {
          version: "4.9",
        },
      })
    ).toThrow(new Error("Can only handle versions between 5.x to 7.x"));
    expect(
      parser.create.bind(null, {
        parser: {
          version: "8.9",
        },
      })
    ).toThrow(new Error("Can only handle versions between 5.x to 7.x"));
  });
});
