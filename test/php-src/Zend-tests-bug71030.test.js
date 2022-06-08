// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71030.phpt
  it("Bug #71030: Self-assignment in list() may have inconsistent behavior", function () {
    expect(parser.parseCode("<?php\nfunction test1() {\n    $a = [1, 2];\n    $c =& $a;\n    list($c, $b) = $a;\n    var_dump($a, $b);\n}\nfunction test2() {\n    $a = [1, 2];\n    $_a = \"a\";\n    list($$_a, $b) = $a;\n    var_dump($a, $b);\n}\ntest1();\ntest2();\n?>")).toMatchSnapshot();
  });
});
