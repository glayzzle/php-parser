// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/euc_cn_encoding.phpt
  it("Exhaustive test of verification and conversion of EUC-CN text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\ntestEncodingFromUTF16ConversionTable(__DIR__ . '/data/EUC-CN.txt', 'EUC-CN');\n// Test \"long\" illegal character markers\nmb_substitute_character(\"long\");\nconvertInvalidString(\"\\x80\", \"%\", \"EUC-CN\", \"UTF-8\");\nconvertInvalidString(\"\\xA1\\x50\", \"%\", \"EUC-CN\", \"UTF-8\");\nconvertInvalidString(\"\\xF7\\xFF\", \"%\", \"EUC-CN\", \"UTF-8\");\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
