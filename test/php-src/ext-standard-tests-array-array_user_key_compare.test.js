// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_user_key_compare.phpt
  it("Fix UMR in array_user_key_compare (MOPB24)", function () {
    expect(parser.parseCode("<?php\n$arr = array(\"A\" => 1, \"B\" => 1);\nfunction array_compare(&$key1, &$key2)\n  {\n    $GLOBALS['a'] = &$key2;\n    unset($key2);\n    return 1;\n  }\nuksort($arr, \"array_compare\");\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
