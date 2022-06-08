// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug55146.phpt
  it("Bug #55146 (iconv_mime_decode_headers() skips some headers)", function () {
    expect(parser.parseCode("<?php\n$headers = <<< HEADERS\nX-Header-One: H4sIAAAAAAAAA+NgFlsCAAA=\nX-Header-Two: XtLePq6GTMn8G68F0\nHEADERS;\nvar_dump(iconv_mime_decode_headers($headers, ICONV_MIME_DECODE_CONTINUE_ON_ERROR));\n$headers = <<< HEADERS\nX-Header-One: =\nX-Header-Two: XtLePq6GTMn8G68F0\nHEADERS;\nvar_dump(iconv_mime_decode_headers($headers, ICONV_MIME_DECODE_STRICT));\n?>")).toMatchSnapshot();
  });
});
