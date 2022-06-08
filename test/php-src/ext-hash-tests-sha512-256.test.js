// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/sha512-256.phpt
  it("Hash: sha512/256 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('sha512/256', '') . \"\\n\";\necho hash('sha512/256', 'abc') . \"\\n\";\necho hash('sha512/256', 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
