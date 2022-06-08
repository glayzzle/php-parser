// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/cp850_encoding.phpt
  it("Exhaustive test of verification and conversion of CP850 text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\ntestEncodingFromUTF16ConversionTable(__DIR__ . '/data/CP850.txt', 'CP850');?>")).toMatchSnapshot();
  });
});
