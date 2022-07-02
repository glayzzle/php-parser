// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/bug75221.phpt
  it("Bug #75221 (Argon2i always throws NUL at the end)", function () {
    expect(parser.parseCode("<?php\n$hash = password_hash(\n    \"php\",\n    PASSWORD_ARGON2I,\n    ['memory_cost' => 64 << 10, 'time_cost' => 4, 'threads' => 1]\n);\nvar_dump(substr($hash, -1, 1) !== \"\\0\");\n?>")).toMatchSnapshot();
  });
});
