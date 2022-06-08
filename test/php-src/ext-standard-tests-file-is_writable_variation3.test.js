// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_writable_variation3.phpt
  it("Test is_writable() and its alias is_writeable() function: usage variations - invalid file names", function () {
    expect(parser.parseCode("<?php\n/* test is_writable() & is_writeable() with invalid arguments */\necho \"*** Testing is_writable(): usage variations ***\\n\";\necho \"\\n*** Testing is_writable() with invalid filenames ***\\n\";\n$misc_files = array(\n  0,\n  1234,\n  -2.34555,\n  TRUE,\n  FALSE,\n  \" \",\n);\n/* loop through to test each element in the above array\n   is a writable file */\nforeach( $misc_files as $misc_file ) {\n  var_dump( is_writable($misc_file) );\n  var_dump( is_writeable($misc_file) );\n  clearstatcache();\n}\n?>")).toMatchSnapshot();
  });
});
