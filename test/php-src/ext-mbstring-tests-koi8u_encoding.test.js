// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/koi8u_encoding.phpt
  it("Exhaustive test of verification and conversion of KOI8-U text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\ntestEncodingFromUTF16ConversionTable(__DIR__ . '/data/KOI8-U.txt', 'KOI8-U');\n?>")).toMatchSnapshot();
  });
});
