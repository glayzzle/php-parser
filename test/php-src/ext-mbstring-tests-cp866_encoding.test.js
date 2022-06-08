// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/cp866_encoding.phpt
  it("Exhaustive test of verification and conversion of CP866 text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\ntestEncodingFromUTF16ConversionTable(__DIR__ . '/data/CP866.txt', 'CP866');\n?>")).toMatchSnapshot();
  });
});
