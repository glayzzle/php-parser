// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/valid.phpt
  it("Supported operations on $GLOBALS", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    var_dump($GLOBALS['x']);\n    $GLOBALS['x'] = 1;\n    var_dump($GLOBALS['x']);\n    $GLOBALS['x']++;\n    var_dump($GLOBALS['x']);\n    $GLOBALS['x'] += 2;\n    var_dump($GLOBALS['x']);\n    unset($GLOBALS['y']);\n    var_dump(isset($GLOBALS['x']));\n    var_dump(isset($GLOBALS['y']));\n    $GLOBALS['z'][] = 1;\n}\n$y = 1;\ntest();\nvar_dump($x, $y, $z);\n$ref = 1;\n$GLOBALS['z'] =& $ref;\n$ref++;\nvar_dump($z);\n$x = 1;\n$ref2 =& $GLOBALS['x'];\n$ref2++;\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
