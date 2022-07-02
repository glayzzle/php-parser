// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/method_call_on_string_literal.phpt
  it("Method call on string literal", function () {
    expect(parser.parseCode("<?php\n\"string\"->length();\n?>")).toMatchSnapshot();
  });
});
