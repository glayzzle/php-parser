// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug80216.phpt
  it("Bug #80216 (imap_mail_compose() does not validate types/encodings)", function () {
    expect(parser.parseCode("<?php\nimap_mail_compose([], [['type' => TYPEMULTIPART], []]);\nimap_mail_compose([], [['type' => 12]]);\nimap_mail_compose([], [['type' => TYPEMULTIPART], ['type' => 12]]);\nimap_mail_compose([], [['encoding' => 8]]);\nimap_mail_compose([], [['type' => TYPEMULTIPART], ['encoding' => 8]]);\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
