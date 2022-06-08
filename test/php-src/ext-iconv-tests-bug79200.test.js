// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug79200.phpt
  it("Bug #79200 (Some iconv functions cut Windows-1258)", function () {
    expect(parser.parseCode("<?php\nvar_dump(iconv_mime_decode('=?windows-1258?Q?test=20test?=', 0, 'UTF-8'));\nvar_dump(iconv_strlen('test test', 'WINDOWS-1258'));\nvar_dump(iconv_strpos('test test', 'test test', 0, 'WINDOWS-1258'));\nvar_dump(iconv_substr('test test', 0 , 9, 'WINDOWS-1258'));\n?>")).toMatchSnapshot();
  });
});
