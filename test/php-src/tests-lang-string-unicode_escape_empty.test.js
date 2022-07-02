// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/string/unicode_escape_empty.phpt
  it("Invalid Unicode escape sequence: Empty", function () {
    expect(() => parser.parseCode("<?php\nvar_dump(\"\\u{}\");\n?>")).toThrowErrorMatchingSnapshot();
  });
});
