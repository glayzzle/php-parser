// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation8-win32.phpt
  it("Test rename() function: variation", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing rename() on non-existing file ***\\n\";\n$file_path = __DIR__;\n// try renaming a non existing file\n$src_name = $file_path.\"/non_existent_file.tmp\";\n$dest_name = $file_path.\"/rename_variation8_new.tmp\";\nvar_dump( rename($src_name, $dest_name) );\n// ensure that $dest_name didn't get created\nvar_dump( file_exists($src_name) );  // expecting false\nvar_dump( file_exists($dest_name) ); // expecting false\n// rename a existing dir to new name\necho \"\\n*** Testing rename() on existing directory ***\\n\";\n$dir_name = $file_path.\"/rename_basic_dir\";\nmkdir($dir_name);\n$new_dir_name = $file_path.\"/rename_basic_dir1\";\nvar_dump( rename($dir_name, $new_dir_name) );\n//ensure that $new_dir_name got created\nvar_dump( file_exists($dir_name) );  // expecting false\nvar_dump( file_exists($new_dir_name) );  // expecting true\n// try to rename an non_existing dir\necho \"\\n*** Testing rename() on non-existing directory ***\\n\";\n$non_existent_dir_name = $file_path.\"/non_existent_dir\";\n$new_dir_name = \"$file_path/rename_basic_dir2\";\nvar_dump( rename($non_existent_dir_name, $new_dir_name) );\n// ensure that $new_dir_name didn't get created\nvar_dump( file_exists($non_existent_dir_name) );  // expecting flase\nvar_dump( file_exists($new_dir_name) );  // expecting false\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
