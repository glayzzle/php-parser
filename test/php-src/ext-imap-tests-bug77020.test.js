// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug77020.phpt
  it("Bug #77020 (null pointer dereference in imap_mail)", function () {
    expect(parser.parseCode("<?php\n@imap_mail('1', 1, NULL);\necho 'done'\n?>")).toMatchSnapshot();
  });
});
