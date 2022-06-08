// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/gh7980.phpt
  it("Bug GH-7980 (Unexpected result for iconv_mime_decode)", function () {
    expect(parser.parseCode("<?php\n$subject = '=?windows-1258?Q?DSI_Charg=E9_de_Formation_Jean_Dupont?= <jdupont@example.fr>';\nvar_dump(iconv_mime_decode($subject, ICONV_MIME_DECODE_STRICT, 'UTF-8'));\n?>")).toMatchSnapshot();
  });
});
