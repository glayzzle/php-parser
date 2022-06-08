// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readfile_variation7.phpt
  it("Test readfile() function : variation", function () {
    expect(parser.parseCode("<?php\nrequire_once('fopen_include_path.inc');\necho \"*** Testing readfile() : variation ***\\n\";\n// this doesn't create the include dirs in this directory\n// we change to this to ensure we are not part of the\n// include paths.\n$thisTestDir = \"readfileVar7.dir\";\nmkdir($thisTestDir);\nchdir($thisTestDir);\n$filename = \"readFileVar7.tmp\";\n$scriptLocFile = __DIR__.\"/\".$filename;\n$newpath = create_include_path();\nset_include_path($newpath);\nruntest();\nteardown_include_path();\nchdir(\"..\");\nrmdir($thisTestDir);\nfunction runtest() {\n   global $scriptLocFile, $filename;\n   $h = fopen($scriptLocFile, \"w\");\n   fwrite($h, \"File in script location\");\n   fclose($h);\n   readfile($filename, true);\n   echo \"\\n\";\n   unlink($scriptLocFile);\n}\n?>")).toMatchSnapshot();
  });
});
