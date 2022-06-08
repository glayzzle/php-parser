// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fileowner_variation2.phpt
  it("Test fileowner() function: usage variations - invalid filenames", function () {
    expect(parser.parseCode("<?php\n/* Testing fileowner() with invalid arguments -int, float, bool, NULL, resource */\n$file_path = __DIR__;\necho \"*** Testing Invalid file types ***\\n\";\n$filenames = array(\n  /* Invalid filenames */\n  -2.34555,\n  \" \",\n  \"\",\n  TRUE,\n  FALSE,\n  /* scalars */\n  1234,\n  0\n);\n/* loop through to test each element the above array */\nforeach( $filenames as $filename ) {\n  var_dump( fileowner($filename) );\n  clearstatcache();\n}\n?>")).toMatchSnapshot();
  });
});
