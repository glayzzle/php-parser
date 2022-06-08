// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_put_contents_variation5.phpt
  it("Test file_put_contents() function : variation - include path testing", function () {
    expect(parser.parseCode("<?php\n$thisTestDir = __DIR__ . '/' .basename(__FILE__, \".php\") . \".directory\";\nmkdir($thisTestDir);\nchdir($thisTestDir);\n$filename = basename(__FILE__, \".php\") . \".tmp\";\n$scriptLocFile = __DIR__.\"/\".$filename;\n$newpath = \"rubbish\";\nset_include_path($newpath);\nruntest();\n$newpath = \"\";\nset_include_path($newpath);\nruntest();\nset_include_path(\"\");\nruntest();\nset_include_path(\";;  ; ;c:\\\\rubbish\");\nruntest();\nchdir(__DIR__);\nrmdir($thisTestDir);\nfunction runtest() {\n   global $scriptLocFile, $filename;\n   file_put_contents($filename, \"File written in working directory\", FILE_USE_INCLUDE_PATH);\n   if(file_exists($scriptLocFile)) {\n      echo \"Fail - this is PHP52 behaviour\\n\";\n      unlink($scriptLocFile);\n   }else {\n      $line = file_get_contents($filename);\n      echo \"$line\\n\";\n      unlink($filename);\n   }\n}\n?>")).toMatchSnapshot();
  });
});
