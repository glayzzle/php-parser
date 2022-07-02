// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/test001.phpt
  it("EXPECT", function () {
    expect(parser.parseCode("abc")).toMatchSnapshot();
  });
});
