// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug42838.phpt
  it("Bug #42838 (Wrong results in array_diff_uassoc())", function () {
    expect(parser.parseCode("<?php\nfunction key_compare_func($a, $b)\n{\n    if ($a === $b) {\n        return 0;\n    }\n    return ($a > $b)? 1:-1;\n}\n$array1 = array(\"a\" => \"green\", \"b\" => \"Brown\", 'c' => 'blue', 0 => 'red');\n$array2 = array(\"a\" => \"green\", \"b\" => \"Brown\", 'c' => 'blue', 0 => 'red');\n$result = array_diff_uassoc($array1, $array2, \"key_compare_func\");\nprint_r($result);\n?>")).toMatchSnapshot();
  });
});
