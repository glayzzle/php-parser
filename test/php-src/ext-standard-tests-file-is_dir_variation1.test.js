// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_dir_variation1.phpt
  it("Test is_dir() function: usage variations - dir/subdir", function () {
    expect(parser.parseCode("<?php\n/* Testing is_dir() with base and sub dirs */\n$file_path = __DIR__;\necho \"-- Testing is_dir() with an empty dir --\\n\";\n$dirname = $file_path.\"/is_dir_variation1\";\nmkdir($dirname);\nvar_dump( is_dir($dirname) );\nclearstatcache();\necho \"-- Testing is_dir() with a subdir in base dir --\\n\";\n$subdirname = $dirname.\"/is_dir_variation1_sub\";\nmkdir($subdirname);\nvar_dump( is_dir($subdirname) );\nvar_dump( is_dir($dirname) );\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
