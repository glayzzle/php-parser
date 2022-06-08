// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_put_contents_variation6.phpt
  it("Test file_put_contents() function : variation - include path testing", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file_put_contents() : variation ***\\n\";\nrequire_once('fopen_include_path.inc');\n$thisTestDir = basename(__FILE__, \".php\") . \".dir\";\nmkdir($thisTestDir);\nchdir($thisTestDir);\n$filename = basename(__FILE__, \".php\") . \".tmp\";\n$newpath = create_include_path();\nset_include_path($newpath);\nruntest();\n$newpath = generate_next_path();\nset_include_path($newpath);\nruntest();\nteardown_include_path();\nchdir(\"..\");\nrmdir($thisTestDir);\nfunction runtest() {\n   global $filename;\n   //correct php53 behaviour is to ignore the FILE_USE_INCLUDE_PATH unless the file already exists\n   // in the include path. In this case it doesn't so the file should be written in the current dir.\n   file_put_contents($filename, \"File in include path\", FILE_USE_INCLUDE_PATH);\n   file_put_contents($filename, \". This was appended\", FILE_USE_INCLUDE_PATH | FILE_APPEND);\n   $line = file_get_contents($filename);\n   echo \"$line\\n\";\n   unlink($filename);\n}\n?>")).toMatchSnapshot();
  });
});
