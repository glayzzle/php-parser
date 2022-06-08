// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/ripemd256.phpt
  it("Hash: ripemd256 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('ripemd256', '') . \"\\n\";\necho hash('ripemd256', 'a') . \"\\n\";\necho hash('ripemd256', 'abc') . \"\\n\";\necho hash('ripemd256', 'message digest') . \"\\n\";\necho hash('ripemd256', 'abcdefghijklmnopqrstuvwxyz') . \"\\n\";\necho hash('ripemd256', 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq') . \"\\n\";\necho hash('ripemd256', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') . \"\\n\";\necho hash('ripemd256', '12345678901234567890123456789012345678901234567890123456789012345678901234567890') . \"\\n\";\necho hash('ripemd256', str_repeat('a', 1000000)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
