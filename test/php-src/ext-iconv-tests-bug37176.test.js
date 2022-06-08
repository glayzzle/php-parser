// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug37176.phpt
  it("Bug #37176 (iconv_strpos() fails to find a string)", function () {
    expect(parser.parseCode("<?php\nvar_dump(iconv_strpos('11--','1-',0,'UTF-8'));\nvar_dump(iconv_strpos('-11--','1-',0,'UTF-8'));\n?>")).toMatchSnapshot();
  });
});
