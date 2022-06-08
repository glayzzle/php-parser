// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/test011.phpt
  it("EXPECT_EXTERNAL", function () {
    expect(parser.parseCode("abc")).toMatchSnapshot();
  });
});
