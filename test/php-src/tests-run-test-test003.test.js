// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/test003.phpt
  it("EXPECTREGEX", function () {
    expect(parser.parseCode("abcde12314235xyz34264768286abcde")).toMatchSnapshot();
  });
});
