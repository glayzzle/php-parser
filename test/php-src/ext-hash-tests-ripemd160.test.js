// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/ripemd160.phpt
  it("Hash: ripemd160 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('ripemd160', '') . \"\\n\";\necho hash('ripemd160', 'a') . \"\\n\";\necho hash('ripemd160', 'abc') . \"\\n\";\necho hash('ripemd160', 'message digest') . \"\\n\";\necho hash('ripemd160', 'abcdefghijklmnopqrstuvwxyz') . \"\\n\";\necho hash('ripemd160', 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq') . \"\\n\";\necho hash('ripemd160', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') . \"\\n\";\necho hash('ripemd160', '12345678901234567890123456789012345678901234567890123456789012345678901234567890') . \"\\n\";\necho hash('ripemd160', str_repeat('a', 1000000)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
