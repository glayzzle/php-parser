// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug80213.phpt
  it("Bug #80213 (imap_mail_compose() segfaults on certain $bodies)", function () {
    expect(parser.parseCode("<?php\n$envelope = [];\n$body = [[\n    'type.parameters' => ['param'],\n    'disposition' => ['disp'],\n], [\n    'type.parameters' => ['param'],\n    'disposition' => ['disp'],\n]];\nvar_dump(imap_mail_compose($envelope, $body));\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
