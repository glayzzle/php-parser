// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80049.phpt
  it("Bug #80049: Memleak when coercing integers to string via variadic argument", function () {
    expect(parser.parseCode("<?php\nfunction coerceToString(string ...$strings) {\n    var_dump($strings);\n}\ncoerceToString(...[123]);\n?>")).toMatchSnapshot();
  });
});
