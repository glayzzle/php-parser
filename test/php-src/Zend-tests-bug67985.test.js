// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67985.phpt
  it("Bug #67985 - Last used array index not copied to new array at assignment", function () {
    expect(parser.parseCode("<?php\n$a = ['zero', 'one', 'two'];\nunset($a[2]);\n$b = $a;\n$a[] = 'three';\n$b[] = 'three';\nvar_dump($a === $b);\n?>")).toMatchSnapshot();
  });
});
