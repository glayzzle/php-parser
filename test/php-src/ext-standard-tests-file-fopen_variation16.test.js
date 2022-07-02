// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fopen_variation16.phpt
  it("Test fopen() function : variation: use include path create and read a file (relative)", function () {
    expect(parser.parseCode("<?php\nrequire_once('fopen_include_path.inc');\n$thisTestDir = \"fopenVariation16.dir\";\nmkdir($thisTestDir);\nchdir($thisTestDir);\n$newpath = create_include_path();\nset_include_path($newpath);\nruntest();\n$newpath = generate_next_path();\nset_include_path($newpath);\nruntest();\nteardown_include_path();\nchdir(\"..\");\nrmdir($thisTestDir);\nfunction runtest() {\n    global $dir1;\n    $extraDir = \"extraDir16\";\n    mkdir($dir1.'/'.$extraDir);\n    mkdir($extraDir);\n    $tmpfile = $extraDir.'/fopen_variation16.tmp';\n    $h = fopen($tmpfile, \"w+\", true);\n    fwrite($h, \"This is the test file\");\n    fclose($h);\n    $h = @fopen($dir1.'/'.$tmpfile, \"r\");\n    if ($h === false) {\n       echo \"Not created in dir1\\n\";\n    }\n    else {\n       echo \"created in dir1\\n\";\n       fclose($h);\n    }\n    $h = fopen($tmpfile, \"r\", true);\n    if ($h === false) {\n       echo \"could not find file for reading\\n\";\n    }\n    else {\n       echo \"found file - not in dir1\\n\";\n       fclose($h);\n    }\n    unlink($tmpfile);\n    rmdir($dir1.'/'.$extraDir);\n    rmdir($extraDir);\n}\n?>")).toMatchSnapshot();
  });
});
