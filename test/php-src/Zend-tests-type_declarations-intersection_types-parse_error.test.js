// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/parse_error.phpt
  it("Parse error for & not followed by var or vararg", function () {
    expect(() => parser.parseCode("<?php\n+&\n?>")).toThrowErrorMatchingSnapshot();
  });
});
