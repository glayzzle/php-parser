// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/dir_variation7.phpt
  it("Test dir() function : usage variations - directories with restricted permissions", function () {
    expect(parser.parseCode("<?php\n/*\n * remove the execute permission from the parent dir and test dir() on child dir\n *   1) remove write & execute permission from the 1st parent and test dir()\n *   2) remove execute permission from 2nd parent and test dir()\n */\necho \"*** Testing dir() : remove execute permission from the parent dir ***\\n\";\n/* create the temporary directory :\n  dir_variation7  ( parent )\n    |-> sub_dir    ( sub parent )\n         |-> child_dir  ( child dir)\n*/\n$file_path = __DIR__;\n$parent_dir_path = $file_path.\"/dir_variation7\";\n@mkdir($parent_dir_path);\nchmod($parent_dir_path, 0777);\n// create sub_dir\n$sub_dir_path = $parent_dir_path.\"/sub_dir\";\n@mkdir($sub_dir_path);\nchmod($sub_dir_path, 0777);\n//create sub_sub_dir\n$child_dir_path = $sub_dir_path.\"/child_dir\";\n@mkdir($child_dir_path);\n// remove the write and execute permission from sub parent\nchmod($sub_dir_path, 0444);\necho \"-- After restricting 1st level parent directory --\\n\";\n$d = dir($child_dir_path); // try to open, expected failure\nvar_dump( $d ); // dump it\n// remove the execute permission from parent dir, allowing all permission for sub dir\nchmod($sub_dir_path, 0777); // all permission to sub dir\nchmod($parent_dir_path, 0666); // restricting parent directory\necho \"-- After restricting parent directory --\\n\";\n$d = dir($child_dir_path); // try to open, expected failure\nvar_dump( $d ); // dump it\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
