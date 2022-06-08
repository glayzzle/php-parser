// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug81216_2.phpt
  it("Bug #81216_2: Nullsafe operator leaks dynamic property name", function () {
    expect(parser.parseCode("<?php\n$a = [null];\n$a[1] = $a[0]?->x;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
