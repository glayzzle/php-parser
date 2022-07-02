// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_call_003.phpt
  it("Testing dynamic call with invalid method name", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass;\n$b = 1;\n$a::$b();\n?>")).toMatchSnapshot();
  });
});
