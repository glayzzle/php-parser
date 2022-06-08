// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/cp1251_encoding.phpt
  it("Exhaustive test of verification and conversion of CP1251 text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\ntestEncodingFromUTF16ConversionTable(__DIR__ . '/data/CP1251.txt', 'CP1251');\n// Test \"long\" illegal character markers\nmb_substitute_character(\"long\");\nconvertInvalidString(\"\\x98\", \"%\", \"CP1251\", \"UTF-8\");\nconvertInvalidString(\"\\x12\\x34\", \"U+1234\", \"UTF-16BE\", \"CP1251\");\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
