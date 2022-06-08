// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug68819_002.phpt
  it("Bug #68819 Fileinfo on specific file causes spurious OOM and/or segfault, var 2", function () {
    expect(parser.parseCode("<?php\n$string = '';\n// These two in any order\n$string .= \"\\r\\n\";\n$string .= \"''''\";\n// Total string length > 8192\n$string .= str_repeat(\"a\", 8184);\n// Ending in this string\n$string .= \"say\";\n$finfo = new finfo();\n$type = $finfo->buffer($string);\nvar_dump($type);\n?>")).toMatchSnapshot();
  });
});
