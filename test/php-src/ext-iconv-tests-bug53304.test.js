// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug53304.phpt
  it("Bug #53304 (quot_print_decode does not handle lower-case hex digits)", function () {
    expect(parser.parseCode("<?php\necho iconv_mime_decode('=?utf-8?Q?Nachricht_=c3=bcber_Kontaktformular_www.inexio.net?=', 0, 'UTF-8') . \"\\n\";\necho iconv_mime_decode('=?utf-8?Q?Nachricht_=C3=BCber_Kontaktformular_www.inexio.net?=', 0, 'UTF-8') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
