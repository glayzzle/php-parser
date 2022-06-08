// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug37773.phpt
  it("Bug #37773 (iconv_substr() gives \"Unknown error\" when string length = 1\")", function () {
    expect(parser.parseCode("<?php\n    var_dump(iconv_substr('x', 0, 1, 'UTF-8'));\n?>")).toMatchSnapshot();
  });
});
