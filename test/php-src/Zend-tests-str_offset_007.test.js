// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/str_offset_007.phpt
  it("string offset 007 indirect string modification by error handler", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $msg) {\n    echo \"Err: $msg\\n\";\n    $GLOBALS['a']='';\n});\n$a=['a'];\n$a[0][$d]='b';\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
