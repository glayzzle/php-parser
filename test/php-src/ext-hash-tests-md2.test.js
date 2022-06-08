// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/md2.phpt
  it("Hash: md2 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('md2', '') . \"\\n\";\necho hash('md2', 'a') . \"\\n\";\necho hash('md2', 'abc') . \"\\n\";\necho hash('md2', 'message digest') . \"\\n\";\necho hash('md2', 'abcdefghijklmnopqrstuvwxyz') . \"\\n\";\necho hash('md2', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') . \"\\n\";\necho hash('md2', '12345678901234567890123456789012345678901234567890123456789012345678901234567890') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
