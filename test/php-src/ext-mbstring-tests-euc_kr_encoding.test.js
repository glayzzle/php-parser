// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/euc_kr_encoding.phpt
  it("Exhaustive test of verification and conversion of EUC-KR text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\ntestEncodingFromUTF16ConversionTable(__DIR__ . '/data/EUC-KR.txt', 'EUC-KR');\n// Test \"long\" illegal character markers\nmb_substitute_character(\"long\");\nconvertInvalidString(\"\\x80\", \"%\", \"EUC-KR\", \"UTF-8\");\nconvertInvalidString(\"\\xA7\\xF0\", \"%\", \"EUC-KR\", \"UTF-8\");\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
