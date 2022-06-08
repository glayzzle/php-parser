// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81216.phpt
  it("Bug #81216: Nullsafe operator leaks dynamic property name", function () {
    expect(parser.parseCode("<?php\n$str = \"foo\";\nnull?->{$str . \"bar\"};\n?>\nDONE")).toMatchSnapshot();
  });
});
