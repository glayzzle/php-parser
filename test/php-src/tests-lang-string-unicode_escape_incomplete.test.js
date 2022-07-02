// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/string/unicode_escape_incomplete.phpt
  it("Invalid Unicode escape sequence: Incomplete", function () {
    expect(() => parser.parseCode("<?php\nvar_dump(\"\\u{blah\");\n?>")).toThrowErrorMatchingSnapshot();
  });
});
