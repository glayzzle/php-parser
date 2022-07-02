// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_call_array_002.phpt
  it("Indirect method call by array - Invalid method name", function () {
    expect(parser.parseCode("<?php\n$arr = array('stdclass', 'b');\n$arr();\n?>")).toMatchSnapshot();
  });
});
