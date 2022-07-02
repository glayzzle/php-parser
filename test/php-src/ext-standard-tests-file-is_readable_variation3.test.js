// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_readable_variation3.phpt
  it("Test is_readable() function: usage variations - invalid file names", function () {
    expect(parser.parseCode("<?php\n/* test is_executable() with invalid arguments */\necho \"*** Testing is_readable(): usage variations ***\\n\";\necho \"\\n*** Testing is_readable() on miscellaneous filenames ***\\n\";\n$misc_files = array(\n  0,\n  1234,\n  -2.34555,\n  TRUE,\n  FALSE,\n  \" \",\n);\n/* loop through to test each element in the above array\n   is a readable file */\nforeach( $misc_files as $misc_file ) {\n  var_dump( is_readable($misc_file) );\n  clearstatcache();\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
