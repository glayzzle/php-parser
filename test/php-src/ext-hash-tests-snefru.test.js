// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/snefru.phpt
  it("Hash: snefru algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('snefru', ''), \"\\n\";\necho hash('snefru', 'The quick brown fox jumps over the lazy dog'), \"\\n\";\necho hash('snefru', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'), \"\\n\";\necho hash('snefru', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'), \"\\n\";\necho hash('snefru', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
