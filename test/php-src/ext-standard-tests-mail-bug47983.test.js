// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/bug47983.phpt
  it("Bug #47983 (mixed LF and CRLF line endings in mail())", function () {
    expect(parser.parseCode("<?php\nvar_dump(mail('user@example.com', 'Test Subject', 'A Message', 'KHeaders'));\n$mail = file_get_contents('bug47983.out');\nvar_dump(preg_match_all('/(?<!\\r)\\n/', $mail));\n?>")).toMatchSnapshot();
  });
});
