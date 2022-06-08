// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fopen_variation9.phpt
  it("Test fopen() function : variation: use include path and stream context create a file, relative path", function () {
    expect(parser.parseCode("<?php\nrequire_once('fopen_include_path.inc');\n$thisTestDir =  basename(__FILE__, \".php\") . \".dir\";\nmkdir($thisTestDir);\nchdir($thisTestDir);\n$newpath = relative_include_path();\nset_include_path($newpath);\nruntest();\n$newpath = generate_next_rel_path();\nset_include_path($newpath);\nruntest();\nteardown_relative_path();\nchdir(\"..\");\nrmdir($thisTestDir);\nfunction runtest() {\n    $tmpfile =  basename(__FILE__, \".php\") . \".tmp\";\n    $h = fopen($tmpfile, \"w\", true);\n    fwrite($h, \"This is the test file\");\n    fclose($h);\n    $h = @fopen($tmpfile, \"r\");\n    if ($h === false) {\n       echo \"Not created in working dir\\n\";\n    }\n    else {\n       echo \"created in working dir\\n\";\n       fclose($h);\n       unlink($tmpfile);\n    }\n    $h = @fopen('dir1/'.$tmpfile, \"r\");\n    if ($h === false) {\n       echo \"Not created in dir1\\n\";\n    }\n    else {\n       echo \"created in dir1\\n\";\n       fclose($h);\n       unlink('dir1/'.$tmpfile);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
