// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/adler32.phpt
  it("Hash: ADLER32 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('adler32', ''), \"\\n\";\necho hash('adler32', 'a'), \"\\n\";\necho hash('adler32', 'abc'), \"\\n\";\necho hash('adler32', 'message digest'), \"\\n\";\necho hash('adler32', 'abcdefghijklmnopqrstuvwxyz'), \"\\n\";\necho hash('adler32', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'), \"\\n\";\necho hash('adler32', '12345678901234567890123456789012345678901234567890123456789012345678901234567890'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
