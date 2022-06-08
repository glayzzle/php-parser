// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug66588.phpt
  it("Bug #66588 SplFileObject::fgetcsv incorrectly returns a row on premature EOF", function () {
    expect(parser.parseCode("<?php\n$s = fopen(\"php://memory\", \"w+\");\nfwrite($s, \"\\\",bar\");\nrewind($s);\nvar_dump(fgetcsv($s));\nfclose($s);\n$s = fopen(\"php://memory\", \"w+\");\nfwrite($s, \"\\\",bar\\n\");\nrewind($s);\nvar_dump(fgetcsv($s));\nfclose($s);\n?>")).toMatchSnapshot();
  });
});
