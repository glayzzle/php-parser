// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/scandir_variation5.phpt
  it("Test scandir() function : usage variations - different directory permissions", function () {
    expect(parser.parseCode("<?php\n/*\n * remove the execute permission from the parent dir and test scandir() on child dir\n * 1. remove write & execute permission from the 1st parent and test scandir()\n * 2. remove execute permission from 2nd parent and test scandir()\n */\necho \"*** Testing scandir() : usage variations ***\\n\";\n/*\n * create the temporary directory :\n * scandir_variation5  ( parent )\n *  |-> sub_dir     ( sub parent )\n *      |-> child_dir  ( child dir)\n */\n$parent_dir_path = __DIR__ . \"/scandir_variation5\";\nmkdir($parent_dir_path);\nchmod($parent_dir_path, 0777);\n// create sub_dir\n$sub_dir_path = $parent_dir_path . \"/sub_dir\";\nmkdir($sub_dir_path);\nchmod($sub_dir_path, 0777);\n//create sub_sub_dir\n$child_dir_path = $sub_dir_path.\"/child_dir\";\nmkdir($child_dir_path);\n// remove the write and execute permission from sub parent\nchmod($sub_dir_path, 0444);\necho \"\\n-- After restricting 1st level parent directory --\\n\";\nvar_dump(scandir($child_dir_path));\n// remove the execute permission from parent dir, allowing all permission for sub dir\nchmod($sub_dir_path, 0777); // all permission to sub dir\nchmod($parent_dir_path, 0666); // restricting parent directory\necho \"\\n-- After restricting parent directory --\\n\";\nvar_dump(scandir($child_dir_path));\n?>")).toMatchSnapshot();
  });
});
