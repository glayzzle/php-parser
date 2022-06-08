// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug12556.phpt
  it("Bug #12556 (fgetcsv() ignores lengths when quotes not closed)", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__DIR__.\"/test.csv\", \"r\");\nwhile($line = fgetcsv($fp, 24)) {\n    $line = str_replace(\"\\x0d\\x0a\", \"\\x0a\", $line);\n    var_dump($line);\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
