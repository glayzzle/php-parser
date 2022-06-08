// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79364.phpt
  it("Bug #79364 (When copy empty array, next key is unspecified)", function () {
    expect(parser.parseCode("<?php\n$a = [1, 2];\nunset($a[1], $a[0]);\n$b = $a;\n$a[] = 3;\n$b[] = 4;\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
