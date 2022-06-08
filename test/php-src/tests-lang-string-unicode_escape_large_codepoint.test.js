// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/string/unicode_escape_large_codepoint.phpt
  it("Invalid Unicode escape sequence: Large codepoint", function () {
    expect(() => parser.parseCode("<?php\nvar_dump(\"\\u{110000}\"); // U+10FFFF + 1\n?>")).toThrowErrorMatchingSnapshot();
  });
});
