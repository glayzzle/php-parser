// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation.phpt
  it("Test rename() function: usage variations-1 (Bug#42638)", function () {
    expect(parser.parseCode("<?php\n/* creating directory */\n$file_path = __DIR__;\nmkdir(\"$file_path/rename_variation\");\n/* rename files across directories */\necho \"*** Testing rename() : rename files across directories ***\\n\";\n$src_filenames = array(\n  \"$file_path/rename_variation/rename_variation.tmp\",\n  /* Testing a file trailing slash */\n  \"$file_path/rename_variation/rename_variation.tmp/\",\n  /* Testing file with double slashes */\n  \"$file_path/rename_variation//rename_variation.tmp\",\n  \"$file_path//rename_variation//rename_variation.tmp\",\n);\n$counter = 1;\n/* loop through each $file and rename it to rename_variation_renamed.tmp */\nforeach($src_filenames as $src_filename) {\n  echo \"-- Iteration $counter --\\n\";\n  $fp = fopen(\"$file_path/rename_variation/rename_variation.tmp\", \"w\");\n  fclose($fp);\n  $dest_filename = \"$file_path/rename_variation_renamed.tmp\";\n  var_dump( rename($src_filename, $dest_filename) );\n  // ensure that file got renamed to new name\n  var_dump( file_exists($src_filename) );  // expecting false\n  var_dump( file_exists($dest_filename) );  // expecting true\n  $counter++;\n  // unlink the file\n  unlink($dest_filename);\n}\n// clean the temp dir and file\nrmdir(\"$file_path/rename_variation\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
