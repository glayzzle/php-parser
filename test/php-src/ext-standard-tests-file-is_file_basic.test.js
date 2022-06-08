// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/is_file_basic.phpt
  it("Test is_file() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing is_file(): basic functionality ***\\n\";\n/* Checking with current file */\nvar_dump( is_file(__FILE__) );\n/* Checking with (current) dir */\nvar_dump( is_file(__DIR__) );\n$file_path = __DIR__;\n$file_name = $file_path.\"/is_file_basic.tmp\";\n/* With non-existing file */\nvar_dump( is_file($file_name) );\n/* With existing file */\nfclose( fopen($file_name, \"w\") );\nvar_dump( is_file($file_name) );\necho \"*** Testing is_file() for its return value type ***\\n\";\nvar_dump( is_bool( is_file(__FILE__) ) );\nvar_dump( is_bool( is_file(\"/no/such/file\") ) );\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
