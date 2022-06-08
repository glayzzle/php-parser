// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug80220.phpt
  it("Bug #80220 (imap_mail_compose() may leak memory) - message/rfc822 regression", function () {
    expect(parser.parseCode("<?php\n$bodies = [[\n    'type' => TYPEMESSAGE,\n    'subtype' => 'RFC822',\n], [\n    'contents.data' => 'asd',\n]];\nvar_dump(imap_mail_compose([], $bodies));\n$bodies = [[\n    'type' => TYPEMESSAGE,\n], [\n    'contents.data' => 'asd',\n]];\nvar_dump(imap_mail_compose([], $bodies));\n?>")).toMatchSnapshot();
  });
});
