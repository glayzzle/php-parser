// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/tempnam_variation2.phpt
  it("Test tempnam() function: usage variations - various absolute and relative paths", function () {
    expect(parser.parseCode("<?php\n/* Creating unique files in various dirs by passing relative paths to $dir arg */\necho \"*** Testing tempnam() with absolute and relative paths ***\\n\";\n$dir_name = __DIR__.\"/tempnam_variation2\";\nmkdir($dir_name);\n$dir_path = $dir_name.\"/tempnam_variation2_sub\";\nmkdir($dir_path);\n$old_dir_path = getcwd();\nchdir(__DIR__);\n$dir_paths = array(\n  // absolute paths\n  \"$dir_path\",\n  \"$dir_path/\",\n  \"$dir_path/..\",\n  \"$dir_path//../\",\n  \"$dir_path/../.././tempnam_variation2\",\n  \"$dir_path/..///tempnam_variation2_sub//..//../tempnam_variation2\",\n  \"$dir_path/BADDIR\",\n  // relative paths\n  \".\",\n  \"tempname_variation2\",\n  \"tempname_variation2/\",\n  \"tempnam_variation2/tempnam_variation2_sub\",\n  \"tempnam_variation2//tempnam_variation2_sub\",\n  \"./tempnam_variation2/../tempnam_variation2/tempnam_variation2_sub\",\n  \"BADDIR\",\n);\nfor($i = 0; $i<count($dir_paths); $i++) {\n  $j = $i+1;\n  echo \"\\n-- Iteration $j --\\n\";\n  $file_name = tempnam($dir_paths[$i], \"tempnam_variation2.tmp\");\n  if( file_exists($file_name) ){\n    echo \"File name is => \";\n    print(realpath($file_name));\n    echo \"\\n\";\n    echo \"File permissions are => \";\n    printf(\"%o\", fileperms($file_name) );\n    echo \"\\n\";\n    echo \"File created in => \";\n    $file_dir = dirname($file_name);\n    $dir_req = $dir_paths[$i];\n    if (realpath($file_dir) == realpath(sys_get_temp_dir())) {\n       echo \"temp dir\\n\";\n    }\n    else if ($file_dir == realpath($dir_req)) {\n       echo \"directory specified\\n\";\n    }\n    else {\n       echo \"unknown location\\n\";\n    }\n  }\n  else {\n    echo \"-- File is not created --\";\n  }\n  unlink($file_name);\n}\nchdir($old_dir_path);\nrmdir($dir_path);\nrmdir($dir_name);\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
