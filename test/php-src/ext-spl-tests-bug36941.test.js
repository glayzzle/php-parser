// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug36941.phpt
  it("Bug #36941 (ArrayIterator does not clone itself)", function () {
    expect(parser.parseCode("===ArrayObject===\n<?php\n$a = new ArrayObject();\n$a[] = 1;\n$b = clone $a;\nvar_dump($a[0], $b[0]);\n$b[0] = $b[0] + 1;\nvar_dump($a[0], $b[0]);\n$b[0] = 3;\nvar_dump($a[0], $b[0]);\n?>\n===ArrayIterator===\n<?php\n$a = new ArrayIterator();\n$a[] = 1;\n$b = clone $a;\nvar_dump($a[0], $b[0]);\n$b[0] = $b[0] + 1;\nvar_dump($a[0], $b[0]);\n$b[0] = 3;\nvar_dump($a[0], $b[0]);\n?>")).toMatchSnapshot();
  });
});
