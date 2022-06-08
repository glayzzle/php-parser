// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug22382.phpt
  it("Bug #22382 (fgetcsv() does not handle escaped quotes correctly)", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__DIR__.\"/test2.csv\", \"r\");\nwhile(($line = fgetcsv($fp, 1024))) {\n    var_dump($line);\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
