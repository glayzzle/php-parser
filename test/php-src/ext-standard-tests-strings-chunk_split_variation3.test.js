// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split_variation3.phpt
  it("Test chunk_split() function : usage variations - unexpected large number of chunks", function () {
    expect(parser.parseCode("<?php\n$chunk_length = 1;\necho \"*** Testing chunk_split() : unexpected large 'end' string argument variation 2 ***\\n\";\necho \"Body generation\\n\";\n$body = str_repeat(\"Hello\", 10000000);\necho \"Using chunk_split()\\n\";\nvar_dump(chunk_split($body, $chunk_length));\n?>")).toMatchSnapshot();
  });
});
