// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug76958.phpt
  it("Bug #76958: Broken UTF7-IMAP conversion", function () {
    expect(parser.parseCode("<?php\n$str = '&BCAEMARBBEEESwQ7BDoEOA-';\necho mb_convert_encoding($str, 'UTF-8', 'UTF7-IMAP') . \"\\n\";\n$str = 'Рассылки';\necho mb_convert_encoding($str, 'UTF7-IMAP', 'UTF-8') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
