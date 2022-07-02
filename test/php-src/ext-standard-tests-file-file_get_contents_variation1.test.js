// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_get_contents_variation1.phpt
  it("Test file_get_contents() function : variation - include path testing", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing file_get_contents() : variation ***\\n\";\nrequire_once('fopen_include_path.inc');\n// this doesn't create the include dirs in this directory\n// we change to this to ensure we are not part of the\n// include paths.\n$thisTestDir = \"fileGetContentsVar1.dir\";\nmkdir($thisTestDir);\nchdir($thisTestDir);\n$filename = \"afile.txt\";\n$secondFile = $dir2.\"/\".$filename;\n$newpath = create_include_path();\nset_include_path($newpath);\nruntest();\nteardown_include_path();\nchdir(\"..\");\nrmdir($thisTestDir);\nfunction runtest() {\n   global $secondFile, $filename;\n   $h = fopen($secondFile, \"w\");\n   fwrite($h, \"File in include path\");\n   fclose($h);\n   $line = file_get_contents($filename, true);\n   echo \"$line\\n\";\n   unlink($secondFile);\n}\n?>")).toMatchSnapshot();
  });
});
