// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/sha384.phpt
  it("Hash: sha384 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('sha384', '') . \"\\n\";\necho hash('sha384', 'a') . \"\\n\";\necho hash('sha384', '012345678901234567890123456789012345678901234567890123456789') . \"\\n\";\n/* FIPS-180 Vectors */\necho hash('sha384', 'abc') . \"\\n\";\necho hash('sha384', 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu') . \"\\n\";\necho hash('sha384', str_repeat('a', 1000000)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
