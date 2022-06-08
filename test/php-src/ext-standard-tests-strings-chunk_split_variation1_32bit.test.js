// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split_variation1_32bit.phpt
  it("Test chunk_split() function : usage variations - unexpected large '$end' string argument variation 1", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing chunk_split() : unexpected large 'end' string argument variation 1 ***\\n\";\n$a=str_repeat(\"B\", 65535);\n$b=1;\n$c=str_repeat(\"B\", 65535);\nvar_dump(chunk_split($a,$b,$c));\n?>")).toMatchSnapshot();
  });
});
