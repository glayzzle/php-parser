// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug24980.phpt
  it("Bug #24980 (array_reduce() uses first element as default running total)", function () {
    expect(parser.parseCode("<?php\n/* test #1: numeric data */\nfunction add_up($running_total, $current_value)\n{\n    echo \"running_total is \".(int)$running_total.\", current_value is {$current_value}\\n\";\n    $running_total += $current_value * $current_value;\n    return $running_total;\n}\n$numbers = array (2,3,5,7);\n$total = array_reduce($numbers, 'add_up');\nprint \"Total is $total\\n\";\n/* test #2: string data */\n$a = array(\"a\", \"b\", \"c\");\nfunction foo ($a, $b)\n{\n    return $a . $b;\n}\nvar_dump(array_reduce($a, \"foo\"));\n/* test #3: basic test (used to leak memory) */\nfunction rsum($v, $w)\n{\n    $v += $w;\n    return $v;\n}\nfunction rmul($v, $w)\n{\n    $v *= $w;\n    return $v;\n}\n$a = array(1, 2, 3, 4, 5);\n$x = array();\n$b = array_reduce($a, \"rsum\");\n$c = array_reduce($a, \"rmul\", 10);\n$d = array_reduce($x, \"rsum\", 1);\nvar_dump($b, $c, $d);\n?>")).toMatchSnapshot();
  });
});
