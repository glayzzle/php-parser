// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sodium/tests/bug78516.phpt
  it("Bug #78516 (password_hash(): Memory cost is not in allowed range)", function () {
    expect(parser.parseCode("<?php\n$pass = password_hash('secret', PASSWORD_ARGON2ID, ['memory_cost' => 8191]);\npassword_needs_rehash($pass, PASSWORD_ARGON2ID, ['memory_cost' => 8191]);\nvar_dump(password_get_info($pass)['options']['memory_cost']);\n$pass = password_hash('secret', PASSWORD_ARGON2I, ['memory_cost' => 8191]);\npassword_needs_rehash($pass, PASSWORD_ARGON2I, ['memory_cost' => 8191]);\nvar_dump(password_get_info($pass)['options']['memory_cost']);\n?>")).toMatchSnapshot();
  });
});
