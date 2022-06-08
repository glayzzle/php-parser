// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_offset_002.phpt
  it("Capturing array in user error handler during index conversion", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $msg) {\n    echo \"Err: $msg\\n\";\n    $GLOBALS[''] = $GLOBALS['y'];\n});\nfunction x(&$s){\n    $s[100000000000000000000] = 1;\n}\nx($y);\nvar_dump($y);\n?>")).toMatchSnapshot();
  });
});
