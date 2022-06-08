// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/recursion_limit.phpt
  it("PCRE Recursion limit", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match_all('/\\p{Ll}(\\p{L}((\\p{Ll}\\p{Ll})))/', 'aeiou', $dummy));\nvar_dump(preg_last_error() === PREG_RECURSION_LIMIT_ERROR);\nvar_dump(preg_match_all('/\\p{Ll}\\p{L}\\p{Ll}\\p{Ll}/', 'aeiou', $dummy));\nvar_dump(preg_last_error() === PREG_NO_ERROR);\n?>")).toMatchSnapshot();
  });
});
