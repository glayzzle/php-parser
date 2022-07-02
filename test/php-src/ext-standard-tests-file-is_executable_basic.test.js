// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_executable_basic.phpt
  it("Test is_executable() function: basic functionality", function () {
    expect(parser.parseCode("<?php\n// include common file test functions\nrequire __DIR__.'/file.inc';\necho \"*** Testing is_executable(): basic functionality ***\\n\";\n// create a file\n$filename = __DIR__.\"/is_executable.tmp\";\ncreate_file($filename);\n$counter = 1;\n/* loop to check if the file with new mode is executable\n   using is_executable() */\nfor($mode = 0000; $mode <= 0777; $mode++) {\n  echo \"-- Changing mode of file to $mode --\\n\";\n  chmod($filename, $mode);  // change mode of file\n  var_dump( is_executable($filename) );\n  $counter++;\n  clearstatcache();\n}\n// delete the temp file\ndelete_file($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
