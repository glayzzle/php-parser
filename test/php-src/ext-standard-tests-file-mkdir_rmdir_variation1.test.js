// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/mkdir_rmdir_variation1.phpt
  it("Test mkdir() and rmdir() functions: usage variations - perms(0000-0777)", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mkdir() and rmdir() for different permissions ***\\n\";\n$context = stream_context_create();\n$file_path = __DIR__;\n$counter = 1;\nfor($mode = 0000; $mode <= 0777; $mode++) {\n  echo \"-- Changing mode of directory to $mode --\\n\";\n  var_dump( mkdir(\"$file_path/mkdir_variation1/\", $mode, true) );\n  var_dump( rmdir(\"$file_path/mkdir_variation1/\") );\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
