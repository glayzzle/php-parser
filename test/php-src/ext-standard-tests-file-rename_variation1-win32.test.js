// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation1-win32.phpt
  it("Test rename() function: usage variations", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/file.inc';\n/* creating directory */\n$file_path = __DIR__;\n// rename dirs across directories\necho \"\\n*** Testing rename() : renaming directory across directories ***\\n\";\n$src_dirs = array (\n  /* Testing simple directory tree */\n  \"$file_path/rename_variation/\",\n  /* Testing a dir with trailing slash */\n  \"$file_path/rename_variation/\",\n  /* Testing dir with double trailing slashes */\n  \"$file_path//rename_variation//\",\n);\n$dest_dir = \"$file_path/rename_variation_dir\";\n// create the $dest_dir\nmkdir($dest_dir);\n$counter = 1;\n/* loop through each $src_dirs and rename it to  $dest_dir */\nforeach($src_dirs as $src_dir) {\n  echo \"-- Iteration $counter --\\n\";\n  // create the src dir\n  mkdir(\"$file_path/rename_variation/\");\n  // rename the src dir to a new dir in dest dir\n  var_dump( rename($src_dir, $dest_dir.\"/new_dir\") );\n  // ensure that dir was renamed\n  var_dump( file_exists($src_dir) );  // expecting false\n  var_dump( file_exists($dest_dir.\"/new_dir\") ); // expecting true\n  // remove the new dir\n  rmdir($dest_dir.\"/new_dir\");\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
