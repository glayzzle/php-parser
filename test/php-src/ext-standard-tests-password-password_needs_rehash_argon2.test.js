// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_needs_rehash_argon2.phpt
  it("Test normal operation of password_needs_rehash() with Argon2i and Argon2id", function () {
    expect(parser.parseCode("<?php\n$hash = password_hash('test', PASSWORD_ARGON2I);\nvar_dump(password_needs_rehash($hash, PASSWORD_ARGON2I));\nvar_dump(password_needs_rehash($hash, PASSWORD_ARGON2I, ['memory_cost' => PASSWORD_ARGON2_DEFAULT_MEMORY_COST * 2]));\nvar_dump(password_needs_rehash($hash, PASSWORD_ARGON2I, ['time_cost' => PASSWORD_ARGON2_DEFAULT_TIME_COST + 1]));\n$hash = password_hash('test', PASSWORD_ARGON2ID);\nvar_dump(password_needs_rehash($hash, PASSWORD_ARGON2ID));\nvar_dump(password_needs_rehash($hash, PASSWORD_ARGON2ID, ['memory_cost' => PASSWORD_ARGON2_DEFAULT_MEMORY_COST * 2]));\nvar_dump(password_needs_rehash($hash, PASSWORD_ARGON2ID, ['time_cost' => PASSWORD_ARGON2_DEFAULT_TIME_COST + 1]));\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});
