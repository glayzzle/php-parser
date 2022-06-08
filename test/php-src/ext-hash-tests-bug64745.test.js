// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/bug64745.phpt
  it("Bug #64745 (hash_pbkdf2() truncates data when using default length and hex output)", function () {
    expect(parser.parseCode("<?php\n$hash = hash_pbkdf2('sha1', 'password', 'salt', 1, 0);\n$rawHash = hash_pbkdf2('sha1', 'password', 'salt', 1, 0, true);\nvar_dump($hash);\nvar_dump(bin2hex($rawHash));\n?>")).toMatchSnapshot();
  });
});
