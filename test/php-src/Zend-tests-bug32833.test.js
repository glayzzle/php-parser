// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32833.phpt
  it("Bug #32833 (Invalid opcode with $a[] .= '')", function () {
    expect(parser.parseCode("<?php\n$test = array();\n$test[] .= \"ok\\n\";\necho $test[0];\n?>")).toMatchSnapshot();
  });
});
