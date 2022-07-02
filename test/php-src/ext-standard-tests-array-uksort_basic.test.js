// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/uksort_basic.phpt
  it("Test uksort(): basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/standard/array.c\n*/\nfunction cmp($a, $b) {\n    if ($a == $b) {\n        return 0;\n    }\n    return ($a < $b) ? -1 : 1;\n}\n$a = array(3, 2, 5, 6, 1);\nuasort($a, \"cmp\");\nforeach($a as $key => $value) {\n    echo \"$key: $value\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
