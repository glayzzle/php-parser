// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug51250.phpt
  it("Bug #51250 (iconv_mime_decode() does not ignore malformed Q-encoded words)", function () {
    expect(parser.parseCode("<?php\n$m = ICONV_MIME_DECODE_CONTINUE_ON_ERROR;\nvar_dump(iconv_mime_decode(\"Legal encoded-word: =?utf-8?B?Kg==?= .\", $m));\nvar_dump(iconv_mime_decode(\"Legal encoded-word: =?utf-8?Q?*?= .\", $m));\nvar_dump(iconv_mime_decode(\"Illegal encoded-word: =?utf-8?B?\".chr(0xA1).\"?= .\", $m));\nvar_dump(iconv_mime_decode(\"Illegal encoded-word: =?utf-8?Q?\".chr(0xA1).\"?= .\", $m));\nvar_dump(iconv_mime_decode(\"Legal encoded-word: =?utf-8?B?Kg==?= .\"));\nvar_dump(iconv_mime_decode(\"Legal encoded-word: =?utf-8?Q?*?= .\"));\nvar_dump(iconv_mime_decode(\"Illegal encoded-word: =?utf-8?B?\".chr(0xA1).\"?= .\"));\nvar_dump(iconv_mime_decode(\"Illegal encoded-word: =?utf-8?Q?\".chr(0xA1).\"?= .\"));\n?>")).toMatchSnapshot();
  });
});
