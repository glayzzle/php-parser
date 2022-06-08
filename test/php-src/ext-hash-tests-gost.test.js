// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/gost.phpt
  it("Hash: gost algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('gost', ''), \"\\n\";\necho hash('gost', 'The quick brown fox jumps over the lazy dog'), \"\\n\";\necho hash('gost', 'The quick brown fox jumps over the lazy cog'), \"\\n\";\necho hash('gost', str_repeat('a', 31)), \"\\n\";\necho hash('gost', str_repeat('a', 32)), \"\\n\";\necho hash('gost', str_repeat('a', 33)), \"\\n\";\necho hash('gost-crypto', ''), \"\\n\";\necho hash('gost-crypto', 'The quick brown fox jumps over the lazy dog'), \"\\n\";\necho hash('gost-crypto', 'The quick brown fox jumps over the lazy cog'), \"\\n\";\necho hash('gost-crypto', str_repeat('a', 31)), \"\\n\";\necho hash('gost-crypto', str_repeat('a', 32)), \"\\n\";\necho hash('gost-crypto', str_repeat('a', 33)), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
