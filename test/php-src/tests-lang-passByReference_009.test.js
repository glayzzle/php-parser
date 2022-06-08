// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/passByReference_009.phpt
  it("Assignment as argument", function () {
    expect(parser.parseCode("<?php\n    function foo(&$x, &$y) { $x = 1; echo $y ; }\n    $x = 0;\n    foo($x, $x); // prints 1 ..\n    function foo2($x, &$y, $z)\n    {\n      echo $x; // 0\n      echo $y; // 1\n      $y = 2;\n    }\n    $x = 0;\n    foo2($x, $x, $x = 1);\n    echo $x; // 2\n?>")).toMatchSnapshot();
  });
});
