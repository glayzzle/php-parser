// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79779.phpt
  it("Bug #79779: Assertion failure when assigning property of string offset by reference", function () {
    expect(parser.parseCode("<?php\n$str = \"\";\n$str[1]->a = &$b;\n?>")).toMatchSnapshot();
  });
});
