// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/md5.phpt
  it("Hash: md5 algorithm", function () {
    expect(parser.parseCode("<?php\necho hash('md5', '') . \"\\n\";\necho hash('md5', 'a') . \"\\n\";\necho hash('md5', '012345678901234567890123456789012345678901234567890123456789') . \"\\n\";\necho hash('md5', str_repeat('a', 1000000)) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
