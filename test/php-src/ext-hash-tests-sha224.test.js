// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/sha224.phpt
  it("Hash: sha224 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('sha224', '') . \"\\n\";\necho hash('sha224', 'a') . \"\\n\";\necho hash('sha224', '012345678901234567890123456789012345678901234567890123456789') . \"\\n\";\n/* FIPS-180 Vectors */\necho hash('sha224', 'abc') . \"\\n\";\necho hash('sha224', 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq') . \"\\n\";\necho hash('sha224', str_repeat('a', 1000000)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
