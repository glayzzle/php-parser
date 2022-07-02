// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_008.phpt
  it("call_user_func() behavior with references", function () {
    expect(parser.parseCode("<?php\nfunction test(&$ref1, &$ref2) {\n    $ref1 += 42;\n    $ref2 -= 42;\n    return true;\n}\n$i = $j = 0;\nvar_dump(call_user_func('test', $i, $j));\nvar_dump($i, $j);\nvar_dump(call_user_func_array('test', [$i, $j]));\nvar_dump($i, $j);\n$x =& $i; $y =& $j;\nvar_dump(call_user_func('test', $i, $j));\nvar_dump($i, $j);\nvar_dump(call_user_func_array('test', [$i, $j]));\nvar_dump($i, $j);\n?>")).toMatchSnapshot();
  });
});
