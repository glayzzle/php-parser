// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/cp1252_encoding.phpt
  it("Exhaustive test of verification and conversion of CP1252 text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\ntestEncodingFromUTF16ConversionTable(__DIR__ . '/data/CP1252.txt', 'CP1252');\n// Test \"long\" illegal character markers\nmb_substitute_character(\"long\");\nconvertInvalidString(\"\\x81\", \"%\", \"CP1252\", \"UTF-8\");\nconvertInvalidString(\"\\x9D\", \"%\", \"CP1252\", \"UTF-8\");\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
