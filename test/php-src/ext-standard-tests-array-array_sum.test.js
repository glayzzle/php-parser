// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_sum.phpt
  it("Test array_sum()", function () {
    expect(parser.parseCode("<?php\n$i = 0;\nwhile ($i++ < 1000) {\n    $a[] = $i;\n    $b[] = (string)$i;\n}\n$s1 = array_sum($a);\n$s2 = array_sum($b);\nvar_dump($s1, $s2);\n$j = 0;\nwhile ($j++ < 100000) {\n    $c[] = $j;\n    $d[] = (string) $j;\n}\n$s3 = array_sum($c);\n$s4 = array_sum($d);\nvar_dump($s3, $s4);\n?>")).toMatchSnapshot();
  });
});
