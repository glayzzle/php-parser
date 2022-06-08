// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_executable_variation3.phpt
  it("Test is_executable() function: usage variations - invalid file names", function () {
    expect(parser.parseCode("<?php\n/* test is_executable() with invalid arguments */\necho \"*** Testing is_executable(): usage variations ***\\n\";\n$file_handle = fopen(__FILE__, \"r\");\nunset($file_handle);\necho \"\\n*** Testing is_executable() on invalid files ***\\n\";\n$invalid_files = array(\n  0,\n  1234,\n  -2.34555,\n  TRUE,\n  FALSE,\n  \" \",\n);\n/* loop through to test each element in the above array\n   is an executable file */\nforeach( $invalid_files as $invalid_file ) {\n  var_dump( is_executable($invalid_file) );\n  clearstatcache();\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
