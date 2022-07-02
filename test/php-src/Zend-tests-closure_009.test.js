// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_009.phpt
  it("Closure 009: Using static vars inside lambda", function () {
    expect(parser.parseCode("<?php\n$a = 1;\n$x = function ($x) use ($a) {\n  static $n = 0;\n  $n++;\n  $a = $n.':'.$a;\n  echo $x.':'.$a.\"\\n\";\n};\n$y = function ($x) use (&$a) {\n  static $n = 0;\n  $n++;\n  $a = $n.':'.$a;\n  echo $x.':'.$a.\"\\n\";\n};\n$x(1);\n$x(2);\n$x(3);\n$y(4);\n$y(5);\n$y(6);\n?>")).toMatchSnapshot();
  });
});
