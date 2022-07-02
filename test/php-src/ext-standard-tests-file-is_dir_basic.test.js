// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_dir_basic.phpt
  it("Test is_dir() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing is_dir(): basic functionality ***\\n\";\n$file_path = __DIR__;\nvar_dump( is_dir($file_path) );\nclearstatcache();\nvar_dump( is_dir(\".\") );\nvar_dump( is_dir(__FILE__) );  // expected: bool(false)\n$dir_name = $file_path.\"/is_dir_basic\";\nmkdir($dir_name);\nvar_dump( is_dir($dir_name) );\necho \"*** Testing is_dir() for its return value type ***\\n\";\nvar_dump( is_bool( is_dir($file_path) ) );\nvar_dump( is_bool( is_dir(\"/no/such/dir\") ) );\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
