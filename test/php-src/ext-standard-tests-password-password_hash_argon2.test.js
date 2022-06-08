// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_hash_argon2.phpt
  it("Test normal operation of password_hash() with Argon2i and Argon2id", function () {
    expect(parser.parseCode("<?php\n$password = \"the password for testing 12345!\";\n$algos = [\n    PASSWORD_ARGON2I,\n    'argon2i',\n    2,\n    PASSWORD_ARGON2ID,\n    'argon2id',\n    3,\n];\nforeach ($algos as $algo) {\n  $hash = password_hash($password, $algo);\n  var_dump(password_verify($password, $hash));\n  var_dump(password_get_info($hash)['algo']);\n}\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});
