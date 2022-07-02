// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/004.phpt
  it("Testing randomization of shuffle() and str_shuffle().", function () {
    expect(parser.parseCode("<?php\nfunction stats($f, $a) {\n    $times = 90000;\n    print \"$f\\n\";\n    ksort($a);\n    foreach($a as $k => $v)\n        print \"$k: $v: \" . sprintf('%0.3f', $v / $times) . \"\\n\";\n}\n$a = array();\n$times = 90000;\nfor ($i = 0; $i < $times; $i++) {\n    $p = range(1,4);\n    shuffle($p);\n    $s = join('', $p);\n    if (empty($a[$s])) $a[$s] = 0;\n    $a[$s]++;\n}\nstats('shuffle', $a);\n$a = array();\n$times = 90000;\nfor ($i = 0; $i < $times; $i++) {\n    $p = '1234';\n    $s = str_shuffle($p);\n    if (empty($a[$s])) $a[$s] = 0;\n    $a[$s]++;\n}\nstats('str_shuffle', $a);\n?>")).toMatchSnapshot();
  });
});
