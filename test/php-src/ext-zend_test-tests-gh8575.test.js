// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/gh8575.phpt
  it("CLI: stderr is available in mshutdown", function () {
    expect(parser.parseCode("==DONE==")).toMatchSnapshot();
  });
});
