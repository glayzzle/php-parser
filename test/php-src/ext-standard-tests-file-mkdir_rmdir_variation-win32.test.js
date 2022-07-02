// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/mkdir_rmdir_variation-win32.phpt
  it("Test mkdir() and rmdir() functions: usage variations", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mkdir() and rmdir() for different permissions ***\\n\";\n$context = stream_context_create();\n$file_path = __DIR__;\n$counter = 1;\nfor($mode = 0000; $mode <= 0777; $mode++) {\n  echo \"-- Changing mode of directory to $mode --\\n\";\n  var_dump( mkdir(\"$file_path/mkdir/\", $mode, true) );\n  var_dump( rmdir(\"$file_path/mkdir/\") );\n  $counter++;\n}\necho \"\\n*** Testing mkdir() and rmdir() by giving stream context as fourth argument ***\\n\";\nvar_dump( mkdir(\"$file_path/mkdir/test/\", 0777, true, $context) );\nvar_dump( rmdir(\"$file_path/mkdir/test/\", $context) );\necho \"\\n*** Testing rmdir() on a non-empty directory ***\\n\";\nvar_dump( mkdir(\"$file_path/mkdir/test/\", 0777, true) );\nvar_dump( rmdir(\"$file_path/mkdir/\") );\necho \"\\n*** Testing mkdir() and rmdir() for binary safe functionality ***\\n\";\nvar_dump( mkdir(\"$file_path/tempx000/\") );\nvar_dump( rmdir(\"$file_path/tempx000/\") );\necho \"\\n*** Testing mkdir() with miscellaneous input ***\\n\";\n/* changing mode of mkdir to prevent creating sub-directory under it */\nvar_dump( chmod(\"$file_path/mkdir/\", 0000) );\n/* creating sub-directory test1 under mkdir, expected: false */\nvar_dump( mkdir(\"$file_path/mkdir/test1\", 0777, true) );\nvar_dump( chmod(\"$file_path/mkdir/\", 0777) );  // chmod to enable removing test1 directory\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
