// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_dir_variation3.phpt
  it("Test is_dir() function: usage variations - invalid arguments", function () {
    expect(parser.parseCode("<?php\n/* Passing invalid arguments to is_dir() */\necho \"*** Testing is_dir() with Invalid arguments: expected bool(false) ***\\n\";\n$dirnames = array(\n  /* Invalid dirnames */\n  -2.34555,\n  TRUE,\n  FALSE,\n  \" \",\n  /* scalars */\n  0,\n  1234\n);\n/* loop through to test each element the above array */\nforeach($dirnames as $dirname) {\n  var_dump( is_dir($dirname) );\n}\n?>")).toMatchSnapshot();
  });
});
