// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/test002.phpt
  it("EXPECTF", function () {
    expect(parser.parseCode("123\n-123\n+123\n+1.1\nabc\n0abc\nx")).toMatchSnapshot();
  });
});
