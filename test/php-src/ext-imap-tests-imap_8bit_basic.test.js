// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_8bit_basic.phpt
  it("Test imap_8bit() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_8bit() : basic functionality ***\\n\";\nvar_dump(imap_8bit(\"String with CRLF at end \\r\\n\"));\n//NB this appears to be a bug in cclient; a space at end of string should be encoded as =20\nvar_dump(imap_8bit(\"String with space at end \"));\nvar_dump(imap_8bit(\"String with tabs \\t\\t in middle\"));\nvar_dump(imap_8bit(\"String with tab at end \\t\"));\nvar_dump(imap_8bit(\"\\x00\\x01\\x02\\x03\\x04\\xfe\\xff\\x0a\\x0d\"));\n?>")).toMatchSnapshot();
  });
});
