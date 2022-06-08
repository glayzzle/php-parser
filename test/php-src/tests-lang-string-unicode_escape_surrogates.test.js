// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/string/unicode_escape_surrogates.phpt
  it("Valid Unicode escape sequences: Surrogate halves", function () {
    expect(parser.parseCode("<?php\n// Surrogate pairs are non-well-formed UTF-8 - however, it is sometimes useful\n// to be able to produce these (e.g. CESU-8 handling)\nvar_dump(bin2hex(\"\\u{D801}\"));\nvar_dump(bin2hex(\"\\u{DC00}\"));\nvar_dump(bin2hex(\"\\u{D801}\\u{DC00}\")); // CESU-8 encoding of U+10400\n?>")).toMatchSnapshot();
  });
});
