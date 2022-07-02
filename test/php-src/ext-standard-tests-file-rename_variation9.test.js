// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation9.phpt
  it("Test rename() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing rename() by giving stream context as third argument ***\\n\";\n$file_path = __DIR__;\n$context = stream_context_create();\n// on directory\n$dir_name = \"$file_path/rename_variation_dir9\";\n$new_dir_name = \"$file_path/rename_variation_dir9_new\";\nmkdir($dir_name);\nvar_dump( rename($dir_name, $new_dir_name, $context) );\nvar_dump( file_exists($dir_name) );  // expecting flase\nvar_dump( file_exists($new_dir_name) ); // expecting true\n//on file\n$src_name = \"$file_path/rename_variation9.tmp\";\n$dest_name = \"$file_path/rename_variation9_new.tmp\";\n// create the file\n$fp = fopen($src_name, \"w\");\n$s1 = stat($src_name);\nfclose($fp);\nvar_dump( rename($src_name, $dest_name, $context) );\nvar_dump( file_exists($src_name) );  // expecting false\nvar_dump( file_exists($dest_name) );  // expecting true\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
