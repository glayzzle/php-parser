// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug26003.phpt
  it("Bug #26003 (fgetcsv() is not binary-safe)", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__DIR__.'/test3.csv', 'r');\nvar_dump(fgetcsv($fp, 4096));\n?>")).toMatchSnapshot();
  });
});
