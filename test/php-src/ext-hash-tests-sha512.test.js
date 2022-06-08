// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/sha512.phpt
  it("Hash: sha512 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('sha512', '') . \"\\n\";\necho hash('sha512', 'a') . \"\\n\";\necho hash('sha512', '012345678901234567890123456789012345678901234567890123456789') . \"\\n\";\n/* FIPS-180 Vectors */\necho hash('sha512', 'abc') . \"\\n\";\necho hash('sha512', 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu') . \"\\n\";\necho hash('sha512', str_repeat('a', 1000000)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
