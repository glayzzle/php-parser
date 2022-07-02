// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/count_symbol_table.phpt
  it("Test count() function : count on symbol table", function () {
    expect(parser.parseCode("<?php\n$c1 = 0;\n$c2 = 0;\n$a = 1;\n$b = 1;\n$c1 = count($GLOBALS);\nunset($a);\nunset($GLOBALS[\"b\"]);\n$c2 = count($GLOBALS);\nvar_dump($c1 - $c2);\n$c = 1;\n$c1 = count($GLOBALS);\nvar_dump($c1 - $c2);\n?>")).toMatchSnapshot();
  });
});
