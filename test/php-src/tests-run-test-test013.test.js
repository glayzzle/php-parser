// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/test013.phpt
  it("EXPECTREGEX_EXTERNAL", function () {
    expect(parser.parseCode("abcde12314235xyz34264768286abcde")).toMatchSnapshot();
  });
});
