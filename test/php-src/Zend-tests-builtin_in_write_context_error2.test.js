// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/builtin_in_write_context_error2.phpt
  it("Cannot use built-in functions in write context (reference)", function () {
    expect(parser.parseCode("<?php\n$ref =& strlen(\"foo\");\n?>")).toMatchSnapshot();
  });
});
