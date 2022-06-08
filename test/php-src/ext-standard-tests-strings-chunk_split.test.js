// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chunk_split.phpt
  it("chunk_split() function", function () {
    expect(parser.parseCode("<?php\necho chunk_split('abc', 1, '-').\"\\n\";\necho chunk_split('foooooooooooooooo', 5).\"\\n\";\necho chunk_split(str_repeat('X', 2*76)).\"\\n\";\necho chunk_split(\"test\", 10, \"|end\") . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
