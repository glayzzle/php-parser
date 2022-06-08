// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug78069.phpt
  it("Bug #78069 (Out-of-bounds read in iconv.c:_php_iconv_mime_decode() due to integer overflow)", function () {
    expect(parser.parseCode("<?php\n$hdr = iconv_mime_decode_headers(file_get_contents(__DIR__ . \"/bug78069.data\"),2);\nvar_dump(count($hdr));\n?>\nDONE")).toMatchSnapshot();
  });
});
