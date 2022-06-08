// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/uhc_encoding.phpt
  it("Exhaustive test of verification and conversion of CP949 (UHC) text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\ntestEncodingFromUTF16ConversionTable(__DIR__ . '/data/CP949.txt', 'UHC');\n// Test \"long\" illegal character markers\nmb_substitute_character(\"long\");\nconvertInvalidString(\"\\x80\", \"%\", \"UHC\", \"UTF-8\");\nconvertInvalidString(\"\\xA7\\xF0\", \"%\", \"UHC\", \"UTF-8\");\n?>")).toMatchSnapshot();
  });
});
