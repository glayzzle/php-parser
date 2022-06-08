// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/str_offset_006.phpt
  it("string offset 006 indirect string modification by error handler", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $msg) {\n    echo \"Err: $msg\\n\";\n    $GLOBALS['a']=null;\n});\n$a[$y]=$a.=($y);\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
