// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_019.phpt
  it("Closure 019: Calling lambda using $GLOBALS and global $var", function () {
    expect(parser.parseCode("<?php\n$lambda = function &(&$x) {\n    return $x = $x * $x;\n};\nfunction test() {\n    global $lambda;\n    $y = 3;\n    var_dump($GLOBALS['lambda']($y));\n    var_dump($lambda($y));\n    var_dump($GLOBALS['lambda'](1));\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
