// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/errors04.phpt
  it("Test preg_match_all() function : error conditions - Backtracking limit", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match_all('/.*\\p{N}/', '0123456789', $dummy));\nvar_dump(preg_last_error_msg() === 'Backtrack limit exhausted');\nvar_dump(preg_match_all('/\\p{Nd}/', '0123456789', $dummy));\nvar_dump(preg_last_error_msg() === 'No error');\n?>")).toMatchSnapshot();
  });
});
