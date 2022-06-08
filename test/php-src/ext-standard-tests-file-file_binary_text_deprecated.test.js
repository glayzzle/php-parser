// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_binary_text_deprecated.phpt
  it("The FILE_BINARY and FILE_TEXT constants are deprecated", function () {
    expect(parser.parseCode("<?php\nvar_dump(FILE_BINARY);\nvar_dump(FILE_TEXT);\n?>")).toMatchSnapshot();
  });
});
