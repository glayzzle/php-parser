// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_timeout_basic.phpt
  it("imap_timeout() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"GET values:\\n\";\nvar_dump(imap_timeout(IMAP_OPENTIMEOUT));\nvar_dump(imap_timeout(IMAP_READTIMEOUT));\nvar_dump(imap_timeout(IMAP_WRITETIMEOUT));\nvar_dump(imap_timeout(IMAP_CLOSETIMEOUT));\necho \"SET values:\\n\";\nvar_dump(imap_timeout(IMAP_OPENTIMEOUT, 10));\nvar_dump(imap_timeout(IMAP_READTIMEOUT, 10));\nvar_dump(imap_timeout(IMAP_WRITETIMEOUT, 10));\n//IMAP_CLOSETIMEOUT not implemented\n//var_dump(imap_timeout(IMAP_CLOSETIMEOUT, 10));\necho \"CHECK values:\\n\";\nvar_dump(imap_timeout(IMAP_OPENTIMEOUT));\nvar_dump(imap_timeout(IMAP_READTIMEOUT));\nvar_dump(imap_timeout(IMAP_WRITETIMEOUT));\n//IMAP_CLOSETIMEOUT not implemented\n//var_dump(imap_timeout(IMAP_CLOSETIMEOUT));\n?>")).toMatchSnapshot();
  });
});
