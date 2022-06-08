// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_shuffle_basic.phpt
  it("array_shuffle(): Test return type and value for expected input", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/standard/array.c\n*/\n$numbers = range(1, 20);\necho \"*** testing array_shuffle  \\n\";\n$a = array();\nvar_dump(shuffle($a));\nvar_dump($a);\n$a = array(1);\nvar_dump(shuffle($a));\nvar_dump($a);\n$a = array(2 => 1);\nvar_dump(shuffle($a));\nvar_dump($a);\n$a = array(\"a\" => 1);\nvar_dump(shuffle($a));\nvar_dump($a);\n$a = array(array(1, 2, 3));\nvar_dump(shuffle($a));\nvar_dump($a);\n$a = array(1, 1, 1, 1);\nvar_dump(shuffle($a));\nvar_dump($a);\n$arr1 = array(5 => 1, 6 => 2, 7 => 3, 8 => 9);\n$arr2 = array(5 => 1, 6 => 2, 7 => 3, 8 => 9);\nshuffle($arr1);\necho \"this should be 0->....\" . count(array_diff($arr1, $arr2)) . \"\\n\";\necho \"this should be 4->....\" . count(array_intersect($arr1, $arr2)) . \"\\n\";\n$bigarray = range(1, 400);\nshuffle($bigarray);\necho \"this should be 400->....\" . count($bigarray) . \"\\n\";\necho \"*** testing pass by reference  \\n\";\n$original = $bigarray;\nshuffle($bigarray);\n$diffarray = array_diff_assoc($original, $bigarray);\nif (count($diffarray) < 350) {\n    // with 400 entries, the probability that 50 entries or more get the same\n    // key-> value association should be so close to zero it wont happen in the lifetime of the\n    // universe.\n    echo \"shuffled array seems to be similar to original\\n\";\n    var_dump($original);\n    var_dump($bigarray);\n} else {\n    echo \"test passed \\n\";\n}\n?>")).toMatchSnapshot();
  });
});
