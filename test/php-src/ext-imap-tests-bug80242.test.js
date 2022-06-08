// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug80242.phpt
  it("Bug #80242 (imap_mail_compose() segfaults for multipart with rfc822)", function () {
    expect(parser.parseCode("<?php\n$bodies = [[\n    'type' => TYPEMULTIPART,\n], [\n    'type' => TYPETEXT,\n    'contents.data' => 'some text',\n], [\n    'type' => TYPEMESSAGE,\n    'subtype' => 'RFC822',\n]];\nimap_mail_compose([], $bodies);\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
