// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/passByReference_001.phpt
  it("passing of function parameters by reference", function () {
    expect(parser.parseCode("<?php\nfunction f($arg1, &$arg2)\n{\n    var_dump($arg1++);\n    var_dump($arg2++);\n}\nfunction g (&$arg1, &$arg2)\n{\n    var_dump($arg1);\n    var_dump($arg2);\n}\n$a = 7;\n$b = 15;\nf($a, $b);\nvar_dump($a);\nvar_dump($b);\n$c=array(1);\ng($c,$c[0]);\n?>")).toMatchSnapshot();
  });
});
