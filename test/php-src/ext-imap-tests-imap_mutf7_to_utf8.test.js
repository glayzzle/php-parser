// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_mutf7_to_utf8.phpt
  it("imap_mutf7_to_utf8", function () {
    expect(parser.parseCode("<?php\nvar_dump(imap_mutf7_to_utf8(\"\"));\nvar_dump(imap_mutf7_to_utf8(1));\nvar_dump(imap_mutf7_to_utf8(\"t&AOQ-st\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
