// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/str_offset_008.phpt
  it("string offset 008 indirect string modification by error handler", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $msg) {\n    echo \"Err: $msg\\n\";\n    $GLOBALS['a']=8;\n});\n$z = \"z\";\n$a=[\"xx$z\"];\nvar_dump($a[0][$b]);\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
