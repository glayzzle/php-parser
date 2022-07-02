// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list/list_reference_008.phpt
  it("\"Reference Unpacking - Oddities\" list()", function () {
    expect(parser.parseCode("<?php\n$a = 1;\n$b =& $a;\n$arr = [&$a, &$b];\nlist(&$a, &$b) = $arr;\nvar_dump($a, $b, $arr);\n$b++;\nvar_dump($a, $b, $arr);\nunset($a, $b, $arr);\n/*\n * $a is first set as a reference to the 0'th elem, '1'\n * $a is then set to the value of the 1'st elem, '2'\n * $arr would look like, [2,2]\n * Increment $a, and it should be [3, 2]\n */\n$arr = [1, 2];\nlist(&$a, $a) = $arr;\nvar_dump($a);\n$a++;\nvar_dump($arr);\nunset($a, $arr);\n/*\n * We do not allow references to the same variable of rhs.\n */\n$a = [1, 2];\n$ref =& $a;\nlist(&$a, &$b) = $a;\nvar_dump($a, $b);\n$a++; $b++;\nvar_dump($ref);\n?>")).toMatchSnapshot();
  });
});
