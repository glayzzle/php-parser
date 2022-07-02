// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug53848.phpt
  it("Bug #53848 (fgetcsv removes leading spaces from fields)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . \"/bug53848.csv\";\n@unlink($file);\nfile_put_contents($file, \"a,b\\n  c,  d\");\n$fp = fopen($file, \"r\");\nwhile ($l = fgetcsv($fp)) var_dump($l);\nfclose($fp);\n@unlink($file);\n?>")).toMatchSnapshot();
  });
});
