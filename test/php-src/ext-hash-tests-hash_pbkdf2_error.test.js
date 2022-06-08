// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_pbkdf2_error.phpt
  it("Hash: Test hash_pbkdf2() function : error functionality", function () {
    expect(parser.parseCode("<?php\n/* Generate a PBKDF2 hash of the given password and salt\nReturns lowercase hexbits by default */\necho \"*** Testing hash_pbkdf2() : error conditions ***\\n\";\n$password = 'password';\n$salt = 'salt';\necho \"\\n-- Testing hash_pbkdf2() function with invalid hash algorithm --\\n\";\ntry {\n    var_dump(hash_pbkdf2('foo', $password, $salt, 1));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing hash_pbkdf2() function with non-cryptographic hash algorithm --\\n\";\ntry {\n    var_dump(hash_pbkdf2('crc32', $password, $salt, 1));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing hash_pbkdf2() function with invalid iterations --\\n\";\ntry {\n    var_dump(hash_pbkdf2('md5', $password, $salt, 0));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(hash_pbkdf2('md5', $password, $salt, -1));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing hash_pbkdf2() function with invalid length --\\n\";\ntry {\n    var_dump(hash_pbkdf2('md5', $password, $salt, 1, -1));\n}\ncatch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
