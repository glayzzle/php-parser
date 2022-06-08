// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_uassoc_basic.phpt
  it("array_diff_uassoc(): Basic test", function () {
    expect(parser.parseCode("<?php\n/*\n* array array_diff_uassoc ( array $array1, array $array2 [, array $..., callback $key_compare_func] )\n* Function is implemented in ext/standard/array.c\n*/\nfunction key_compare_func($a, $b) {\n    if ($a === $b) {\n        return 0;\n    }\n    return ($a > $b) ? 1 : -1;\n}\n$array1 = array(\"a\" => \"green\", \"b\" => \"brown\", \"c\" => \"blue\", \"red\");\n$array2 = array(\"a\" => \"green\", \"yellow\", \"red\");\n$result = array_diff_uassoc($array1, $array2, \"key_compare_func\");\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
