// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/sha1.phpt
  it("Hash: sha1 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('sha1', '') . \"\\n\";\necho hash('sha1', 'a') . \"\\n\";\necho hash('sha1', '012345678901234567890123456789012345678901234567890123456789') . \"\\n\";\n/* FIPS-180 Vectors */\necho hash('sha1', 'abc') . \"\\n\";\necho hash('sha1', 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq') . \"\\n\";\necho hash('sha1', str_repeat('a', 1000000)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
