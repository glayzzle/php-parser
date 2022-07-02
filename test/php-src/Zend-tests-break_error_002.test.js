// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/break_error_002.phpt
  it("'break' error (operator with non-integer operand)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n    break $x;\n}\n?>")).toMatchSnapshot();
  });
});
