// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fopen_variation13.phpt
  it("Test fopen() function : variation: use include path create a file (absolute)", function () {
    expect(parser.parseCode("<?php\nrequire_once('fopen_include_path.inc');\necho \"*** Testing fopen() : variation ***\\n\";\n$newpath = create_include_path();\nset_include_path($newpath);\nruntest();\n$newpath = generate_next_path();\nset_include_path($newpath);\nruntest();\nteardown_include_path();\nfunction runtest() {\n    $tempDir = 'fopen_variation13.dir.tmp';\n    $tmpfile = 'fopen_variation13.tmp';\n    $absFile = getcwd().'/'.$tempDir.'/'.$tmpfile;\n    mkdir($tempDir);\n    $h = fopen($absFile, \"w\", true);\n    fwrite($h, \"This is the test file\");\n    fclose($h);\n    $h = fopen($absFile, \"r\");\n    if ($h === false) {\n       echo \"Not created absolute location\\n\";\n    }\n    else {\n       echo \"Created in correct location\\n\";\n       fclose($h);\n    }\n    unlink($absFile);\n    rmdir($tempDir);\n}\n?>")).toMatchSnapshot();
  });
});
