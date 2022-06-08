// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/backtrack_limit.phpt
  it("Backtracking limit", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match_all('/.*\\p{N}/', '0123456789', $dummy));\nvar_dump(preg_last_error() === PREG_BACKTRACK_LIMIT_ERROR);\nvar_dump(preg_match_all('/\\p{Nd}/', '0123456789', $dummy));\nvar_dump(preg_last_error() === PREG_NO_ERROR);\n?>")).toMatchSnapshot();
  });
});
