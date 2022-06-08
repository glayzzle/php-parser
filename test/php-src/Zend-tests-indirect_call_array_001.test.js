// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_call_array_001.phpt
  it("Indirect method call by array - Invalid class name", function () {
    expect(parser.parseCode("<?php\n$arr = array('a', 'b');\n$arr();\n?>")).toMatchSnapshot();
  });
});
