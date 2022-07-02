// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/readfile_variation6.phpt
  it("Test readfile() function : variation - test include path", function () {
    expect(parser.parseCode("<?php\nrequire_once('fopen_include_path.inc');\necho \"*** Testing readfile() : variation ***\\n\";\n// this doesn't create the include dirs in this directory\n// we change to this to ensure we are not part of the\n// include paths.\n$thisTestDir = \"readfileVar6.dir\";\nmkdir($thisTestDir);\nchdir($thisTestDir);\n$filename = \"afile.txt\";\n$secondFile = $dir2.\"/\".$filename;\n$newpath = create_include_path();\nset_include_path($newpath);\nruntest();\nteardown_include_path();\nchdir(\"..\");\nrmdir($thisTestDir);\nfunction runtest() {\n   global $secondFile, $filename;\n   $h = fopen($secondFile, \"w\");\n   fwrite($h, \"File in include path\");\n   fclose($h);\n   readfile($filename, true);\n   echo \"\\n\";\n   unlink($secondFile);\n}\n?>")).toMatchSnapshot();
  });
});
