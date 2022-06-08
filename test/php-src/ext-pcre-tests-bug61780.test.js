// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug61780.phpt
  it("Bug #61780 (Inconsistent PCRE captures in match results): basics", function () {
    expect(parser.parseCode("<?php\npreg_match('/(a)?([a-z]*)(\\d*)/', '123', $matches, PREG_UNMATCHED_AS_NULL);\nvar_dump($matches);\n?>")).toMatchSnapshot();
  });
});
