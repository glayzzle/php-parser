// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/string/unicode_escape_sign2.phpt
  it("Invalid Unicode escape sequence: Negative sign", function () {
    expect(() => parser.parseCode("<?php\nvar_dump(\"\\u{-1F602}\");\n?>")).toThrowErrorMatchingSnapshot();
  });
});
