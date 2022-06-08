// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_call_004.phpt
  it("Testing dynamic call with undefined variables", function () {
    expect(parser.parseCode("<?php\n$a::$b();\n?>")).toMatchSnapshot();
  });
});
