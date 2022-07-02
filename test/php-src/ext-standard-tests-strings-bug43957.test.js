// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug43957.phpt
  it("Bug #43957 (utf8_decode() bogus conversion on multibyte indicator near end of string)", function () {
    expect(parser.parseCode("<?php\n  echo utf8_decode('abc'.chr(0xe0));\n?>")).toMatchSnapshot();
  });
});
