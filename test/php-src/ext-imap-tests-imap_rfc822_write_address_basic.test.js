// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_rfc822_write_address_basic.phpt
  it("imap_rfc822_write_address() : basic functionality", function () {
    expect(parser.parseCode("<?php\nvar_dump(imap_rfc822_write_address('me', 'example.com', 'My Name'));\n?>")).toMatchSnapshot();
  });
});
