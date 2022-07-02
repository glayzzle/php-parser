// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/024.phpt
  it("Testing operations with undefined variable", function () {
    expect(parser.parseCode("<?php\nvar_dump($a[1]);\nvar_dump($a[$c]);\nvar_dump($a + 1);\nvar_dump($a + $b);\nvar_dump($a++);\nvar_dump(++$b);\nvar_dump($a->$b);\nvar_dump($a->$b);\nvar_dump($a->$b->{$c[1]});\n?>")).toMatchSnapshot();
  });
});
