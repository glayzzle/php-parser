// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug72320.phpt
  it("Bug #72320 (iconv_substr returns false for empty strings)", function () {
    expect(parser.parseCode("<?php\nvar_dump(iconv_substr('', 0, 10, 'UTF-8'));\nvar_dump(iconv_substr('foo', 3, 10, 'UTF-8'));\n?>")).toMatchSnapshot();
  });
});
