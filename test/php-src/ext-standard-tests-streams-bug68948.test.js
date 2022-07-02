// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug68948.phpt
  it("Bug #68948: feof() on temporary streams broken", function () {
    expect(parser.parseCode("<?php\n$testString = '0123456789';\n$stream = fopen(\"php://memory\", \"r+\");\nfwrite($stream, $testString);\nrewind($stream);\nvar_dump(fread($stream, 10));\nvar_dump(ftell($stream));\nvar_dump(feof($stream));\nrewind($stream);\nvar_dump(fread($stream, 11));\nvar_dump(ftell($stream));\nvar_dump(feof($stream));\n?>")).toMatchSnapshot();
  });
});
