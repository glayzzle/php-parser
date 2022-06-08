// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_basic.phpt
  it("Test file() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Description: Reads entire file into an array\n */\nrequire(__DIR__ . '/file.inc');\n$file_path = __DIR__;\necho \"*** Testing file() with basic types of files ***\\n\";\n$filetypes = array(\"numeric\", \"text\", \"empty\", \"text_with_new_line\");\nforeach( $filetypes as $type ) {\n  create_files($file_path, 1, $type, 0755, 100, \"w\", \"file_basic\", 1, \"byte\");\n  print_r( file($file_path.\"/file_basic1.tmp\") );\n  delete_files($file_path, 1, \"file_basic\");\n}\necho \"*** Testing for return type of file() function ***\\n\";\nforeach( $filetypes as $type ) {\n  create_files($file_path, 1, $type, 0755, 1, \"w\", \"file_basic\");\n  $ret_arr =  file($file_path.\"/file_basic1.tmp\");\n  var_dump( is_array($ret_arr) );\n  delete_files($file_path, 1, \"file_basic\");\n}\necho \"\\n--- Done ---\";\n?>")).toMatchSnapshot();
  });
});
