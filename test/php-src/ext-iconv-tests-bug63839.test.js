// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug63839.phpt
  it("Bug #63839 (iconv_mime_decode_headers function is skipping headers)", function () {
    expect(parser.parseCode("<?php\n$headers = 'From: \"xyz\" <xyz@xyz.com>\nTo: <xyz@xyz.com>\nSubject: Reply Is? white side-LED =? in Help\nDate: Sat, 22 Dec 2012\nMessage-ID: <006f01cde00e$d9f79da0$8de6d8e0>\nMIME-Version: 1.0\nContent-Type: multipart/alternative;\n    boundary=\"----=_NextPart_000_0070_01CDE03C.F3AFD9A0\"\nX-Mailer: Microsoft Office Outlook 12.0\nThread-Index: Ac3gDtcH2huHjzYcQVmFJPPoWjJogA==\nContent-Language: en-us\n';\nvar_dump(iconv_mime_decode_headers($headers, ICONV_MIME_DECODE_CONTINUE_ON_ERROR));\nvar_dump(iconv_mime_decode_headers($headers, ICONV_MIME_DECODE_STRICT));\n?>")).toMatchSnapshot();
  });
});
