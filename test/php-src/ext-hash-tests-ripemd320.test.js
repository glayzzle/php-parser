// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/ripemd320.phpt
  it("Hash: ripemd320 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('ripemd320', '') . \"\\n\";\necho hash('ripemd320', 'a') . \"\\n\";\necho hash('ripemd320', 'abc') . \"\\n\";\necho hash('ripemd320', 'message digest') . \"\\n\";\necho hash('ripemd320', 'abcdefghijklmnopqrstuvwxyz') . \"\\n\";\necho hash('ripemd320', 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq') . \"\\n\";\necho hash('ripemd320', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') . \"\\n\";\necho hash('ripemd320', '12345678901234567890123456789012345678901234567890123456789012345678901234567890') . \"\\n\";\necho hash('ripemd320', str_repeat('a', 1000000)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
