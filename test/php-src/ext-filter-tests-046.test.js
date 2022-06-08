// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/046.phpt
  it("Integer overflow", function () {
    expect(parser.parseCode("<?php\n$max = sprintf(\"%d\", PHP_INT_MAX);\nswitch($max) {\ncase \"2147483647\": /* 32-bit systems */\n    $min = \"-2147483648\";\n    $overflow = \"2147483648\";\n    $underflow = \"-2147483649\";\n    break;\ncase \"9223372036854775807\": /* 64-bit systems */\n    $min = \"-9223372036854775808\";\n    $overflow = \"9223372036854775808\";\n    $underflow = \"-9223372036854775809\";\n    break;\ndefault:\n    die(\"failed: unknown value for PHP_MAX_INT\");\n    break;\n}\nfunction test_validation($val, $msg) {\n    $f = filter_var($val, FILTER_VALIDATE_INT);\n    echo \"$msg filtered: \"; var_dump($f); // filtered value (or false)\n    echo \"$msg is_long: \"; var_dump(is_long($f)); // test validation\n    echo \"$msg equal: \"; var_dump($val == $f); // test equality of result\n}\n// PHP_INT_MAX\ntest_validation($max, \"max\");\ntest_validation($overflow, \"overflow\");\ntest_validation($min, \"min\");\ntest_validation($underflow, \"underflow\");\n?>")).toMatchSnapshot();
  });
});
