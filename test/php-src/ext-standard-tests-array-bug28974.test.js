// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug28974.phpt
  it("Bug #28974 (array_(p)slice() treats large lengths incorrectly - overflow)", function () {
    expect(parser.parseCode("<?php\n$a = $b = $c = array(0,1,2,3,4,5);\nprint_r($a);\n// this is ok:\nprint_r(array_slice($a,2,2147483645));\n// this is wrong:\nprint_r(array_slice($a,2,2147483646));\necho 'print_r(array_splice($a,2,1));'.\"\\n\";\nprint_r(array_splice($a,2,1));\necho \"\\$a is :\";\nprint_r($a);\necho 'print_r(array_splice($b,2,2147483645));'.\"\\n\";\nprint_r(array_splice($b,2,2147483645));\necho \"\\$b is :\";\nprint_r($b);\n// this is wrong:\necho 'print_r(array_splice($c,2,2147483646));'.\"\\n\";\nprint_r(array_splice($c,2,2147483646));\necho \"\\$c is :\";\nprint_r($c);\n?>")).toMatchSnapshot();
  });
});
