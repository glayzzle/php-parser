// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/sha512-224.phpt
  it("Hash: sha512/224 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('sha512/224', '') . \"\\n\";\necho hash('sha512/224', 'abc') . \"\\n\";\necho hash('sha512/224', 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
