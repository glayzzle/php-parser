// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/sha256.phpt
  it("Hash: sha256 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('sha256', '') . \"\\n\";\necho hash('sha256', 'a') . \"\\n\";\necho hash('sha256', '012345678901234567890123456789012345678901234567890123456789') . \"\\n\";\n/* FIPS-180 Vectors */\necho hash('sha256', 'abc') . \"\\n\";\necho hash('sha256', 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq') . \"\\n\";\necho hash('sha256', str_repeat('a', 1000000)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
