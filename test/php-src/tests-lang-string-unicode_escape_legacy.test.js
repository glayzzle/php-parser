// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/string/unicode_escape_legacy.phpt
  it("Tolerated Unicode escape sequences: Legacy compatibility", function () {
    expect(parser.parseCode("<?php\n// These are ignored to avoid breaking JSON string literals\nvar_dump(\"\\u\");\nvar_dump(\"\\u202e\");\nvar_dump(\"\\ufoobar\");\n?>")).toMatchSnapshot();
  });
});
