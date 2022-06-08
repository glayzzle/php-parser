// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_utf8_to_mutf7_basic.phpt
  it("imap_utf8_to_mutf7", function () {
    expect(parser.parseCode("<?php\nvar_dump(imap_utf8_to_mutf7(\"\"));\nvar_dump(imap_utf8_to_mutf7(1));\nvar_dump(imap_utf8_to_mutf7(\"täst\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
