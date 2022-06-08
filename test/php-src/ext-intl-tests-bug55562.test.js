// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug55562.phpt
  it("grapheme_substr() - Bug55562 - grapheme_substr() returns false if length parameter is to large", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n  grapheme_substr('FOK', 1, 20), // expected: OK\n  grapheme_substr('한국어', 1, 20) //expected: 국어\n);\n?>")).toMatchSnapshot();
  });
});
