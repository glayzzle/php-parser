// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/md4.phpt
  it("Hash: md4 algorithm", function () {
    expect(parser.parseCode("<?php\n/* RFC 1320 vectors */\necho hash('md4', '') . \"\\n\";\necho hash('md4', 'a') . \"\\n\";\necho hash('md4', 'abc') . \"\\n\";\necho hash('md4', 'message digest') . \"\\n\";\necho hash('md4', 'abcdefghijklmnopqrstuvwxyz') . \"\\n\";\necho hash('md4', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') . \"\\n\";\necho hash('md4', '12345678901234567890123456789012345678901234567890123456789012345678901234567890') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
