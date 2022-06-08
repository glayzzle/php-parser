// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/ripemd128.phpt
  it("Hash: ripemd128 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('ripemd128', '') . \"\\n\";\necho hash('ripemd128', 'a') . \"\\n\";\necho hash('ripemd128', 'abc') . \"\\n\";\necho hash('ripemd128', 'message digest') . \"\\n\";\necho hash('ripemd128', 'abcdefghijklmnopqrstuvwxyz') . \"\\n\";\necho hash('ripemd128', 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq') . \"\\n\";\necho hash('ripemd128', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') . \"\\n\";\necho hash('ripemd128', '12345678901234567890123456789012345678901234567890123456789012345678901234567890') . \"\\n\";\necho hash('ripemd128', str_repeat('a', 1000000)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
