// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug45705_1.phpt
  it("Bug #45705 test #1 (imap rfc822_parse_adrlist() modifies passed address parameter)", function () {
    expect(parser.parseCode("<?php\n$address = 'John Doe <john@example.com>';\nvar_dump($address);\nimap_rfc822_parse_adrlist($address, '');\nvar_dump($address);\n?>")).toMatchSnapshot();
  });
});
