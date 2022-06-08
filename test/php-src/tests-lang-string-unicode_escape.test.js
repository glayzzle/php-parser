// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/string/unicode_escape.phpt
  it("Valid Unicode escape sequences", function () {
    expect(parser.parseCode("<?php\nvar_dump(\"\\u{61}\"); // ASCII \"a\" - characters below U+007F just encode as ASCII, as it's UTF-8\nvar_dump(\"\\u{FF}\"); // y with diaeresis\nvar_dump(\"\\u{ff}\"); // case-insensitive\nvar_dump(\"\\u{2603}\"); // Unicode snowman\nvar_dump(\"\\u{1F602}\"); // FACE WITH TEARS OF JOY emoji\nvar_dump(\"\\u{0000001F602}\"); // Leading zeroes permitted\n?>")).toMatchSnapshot();
  });
});
