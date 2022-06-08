// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug40501.phpt
  it("Bug #40501 (fgetcsv() can't handle trailing odd number of backslashes)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.'/bug40501.csv';\n$h = fopen($file, 'r');\n$data = fgetcsv($h, NULL, ',', '\"', '\"');\nfclose($h);\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
