// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_call_002.phpt
  it("Testing dynamic call with invalid value for method name", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass;\n$a::$a();\n?>")).toMatchSnapshot();
  });
});
