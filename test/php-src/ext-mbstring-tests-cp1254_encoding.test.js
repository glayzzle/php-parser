// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/cp1254_encoding.phpt
  it("Exhaustive test of verification and conversion of CP1254 text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\ntestEncodingFromUTF16ConversionTable(__DIR__ . '/data/CP1254.txt', 'CP1254');\n// Test \"long\" illegal character markers\nmb_substitute_character(\"long\");\nconvertInvalidString(\"\\x81\", \"%\", \"CP1254\", \"UTF-8\");\nconvertInvalidString(\"\\x9E\", \"%\", \"CP1254\", \"UTF-8\");\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
