// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug60494.phpt
  it("Bug #60494 (iconv_mime_decode does ignore special characters)", function () {
    expect(parser.parseCode("<?php\nvar_dump(iconv_mime_decode('ä'));\nvar_dump(iconv_mime_decode('ö'));\nvar_dump(iconv_mime_decode('ß'));\n?>")).toMatchSnapshot();
  });
});
