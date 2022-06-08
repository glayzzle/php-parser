// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/by_ref.phpt
  it("Argument unpacking with by-ref arguments", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nfunction test1(&...$args) {\n    foreach ($args as &$arg) {\n        $arg++;\n    }\n}\ntest1(...[1, 2, 3]);\n$array = [1, 2, 3];\ntest1(...$array);\nvar_dump($array);\n$array1 = [1, 2]; $array2 = [3, 4];\ntest1(...$array1, ...$array2);\nvar_dump($array1, $array2);\nfunction test2($val1, &$ref1, $val2, &$ref2) {\n    $ref1++;\n    $ref2++;\n}\n$array = [0, 0, 0, 0];\ntest2(...$array);\nvar_dump($array);\n$array1 = [1, 2]; $array2 = [4, 5];\ntest1(...$array1, ...$array2);\nvar_dump($array1, $array2);\n$a = $b = $c = $d = 0;\n$array = [0, 0, 0, 0];\ntest2($a, ...$array);\nvar_dump($a, $array);\ntest2($a, $b, ...$array);\nvar_dump($a, $b, $array);\ntest2($a, $b, $c, ...$array);\nvar_dump($a, $b, $c, $array);\ntest2($a, $b, $c, $d, ...$array);\nvar_dump($a, $b, $c, $d, $array);\n?>")).toMatchSnapshot();
  });
});
