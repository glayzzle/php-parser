// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug66127.phpt
  it("Bug #66127 (Segmentation fault with ArrayObject unset)", function () {
    expect(parser.parseCode("<?php\nfunction crash()\n{\n    set_error_handler(function () {});\n    $var = 1;\n    trigger_error('error');\n    $var2 = $var;\n    $var3 = $var;\n    trigger_error('error');\n}\n$items = new ArrayObject();\nunset($items[0]);\nunset($items[0][0]);\ncrash();\necho \"Worked!\\n\";\n?>")).toMatchSnapshot();
  });
});
