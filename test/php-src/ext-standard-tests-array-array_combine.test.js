// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_combine.phpt
  it("basic array_combine test", function () {
    expect(parser.parseCode("<?php\n    $array1 = array('green', 'red', 'yellow');\n    $array2 = array('1', '2', '3');\n    $array3 = array(0, 1, 2);\n    $array4 = array(TRUE, FALSE, NULL);\n    $a = array_combine($array1, $array1);\n    $b = array_combine($array1, $array2);\n    $c = array_combine($array1, $array3);\n    $d = array_combine($array1, $array4);\n    $e = array_combine($array2, $array1);\n    $f = array_combine($array2, $array2);\n    $g = array_combine($array2, $array3);\n    $h = array_combine($array2, $array4);\n    $i = array_combine($array3, $array1);\n    $j = array_combine($array3, $array2);\n    $k = array_combine($array3, $array3);\n    $l = array_combine($array3, $array4);\n    $m = array_combine($array4, $array1);\n    $n = array_combine($array4, $array2);\n    $o = array_combine($array4, $array3);\n    $p = array_combine($array4, $array4);\n    for($letter = \"a\"; $letter <= \"p\"; $letter++)\n    {\n     print_r($$letter);\n    }\n?>")).toMatchSnapshot();
  });
});
