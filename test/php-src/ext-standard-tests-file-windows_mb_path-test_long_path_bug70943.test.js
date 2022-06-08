// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_long_path_bug70943.phpt
  it("Bug #70943 fopen() can't open a file if path is 259 characters long", function () {
    expect(parser.parseCode("<?php\n// Generates a sample file whose path is exactly 259 characters long\n$testFile = __DIR__ . DIRECTORY_SEPARATOR . str_repeat(\"a\", 254 - strlen(__DIR__)).\".dat\";\necho \"Generating a file with a path length of \".strlen($testFile).\" characters...\\r\\n\";\ntouch($testFile);\necho \"Opening file... \";\nif ($fp = fopen($testFile, \"r\")) {\n    fclose($fp);\n    echo \"OK\", \"\\n\";\n}\nunlink($testFile);\n?>")).toMatchSnapshot();
  });
});
