// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug73847.phpt
  it("Bug #73847: Recursion when a variable is redefined as array", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $a = 42;\n    $a = array($a);\n    var_dump($a);\n    $a = 42;\n    $a = array($a => 24);\n    var_dump($a);\n    $a = 42;\n    $a = array($a, 24);\n    var_dump($a);\n    $a = 42;\n    $a = array(24, $a);\n    var_dump($a);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
