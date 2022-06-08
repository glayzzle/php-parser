// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_parse_error.phpt
  it("Parse error in preload script", function () {
    expect(() => parser.parseCode("OK")).toThrowErrorMatchingSnapshot();
  });
});
