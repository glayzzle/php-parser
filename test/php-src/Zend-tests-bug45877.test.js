// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug45877.phpt
  it("Bug #45877 (Array key '2147483647' left as string)", function () {
    expect(parser.parseCode("<?php\n$keys = array(PHP_INT_MAX,\n    (string) PHP_INT_MAX,\n    (string) (-PHP_INT_MAX - 1),\n    -PHP_INT_MAX - 1,\n    (string) (PHP_INT_MAX + 1));\nvar_dump(array_fill_keys($keys, 1));\n?>")).toMatchSnapshot();
  });
});
