// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv004.phpt
  it("iconv_mime_encode() sanity cheeck.", function () {
    expect(parser.parseCode("<?php\nvar_dump(iconv_mime_encode('', ''));\nvar_dump(iconv_mime_encode('', '', array('line-break-chars' => 1)));\n?>")).toMatchSnapshot();
  });
});
