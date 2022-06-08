// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug31142_2.phpt
  it("Bug #31142 test #2 (imap_mail_compose() generates incorrect output)", function () {
    expect(parser.parseCode("<?php\n$envelope[\"from\"]= 'host@domain.com';\n$envelope[\"return_path\"]= 'host@domain.com';\n$part1[\"type\"]=TYPETEXT;\n$part1[\"subtype\"]=\"plain\";\n$part1[\"encoding\"]=ENCQUOTEDPRINTABLE ;\n$part1[\"charset\"]='iso-8859-2';\n$part1[\"contents.data\"]=imap_8bit('asn řkl');\n$body = array($part1);\necho imap_mail_compose($envelope, $body);\n?>")).toMatchSnapshot();
  });
});
