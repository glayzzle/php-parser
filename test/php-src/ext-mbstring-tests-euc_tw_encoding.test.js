// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/euc_tw_encoding.phpt
  it("Exhaustive test of verification and conversion of EUC-TW text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\nsrand(1000); // Make results consistent\nmb_substitute_character(0x25); // '%'\nreadConversionTable(__DIR__ . '/data/EUC-TW.txt', $toUnicode, $fromUnicode);\nfindInvalidChars($toUnicode, $invalid, $truncated);\ntestAllValidChars($toUnicode, 'EUC-TW', 'UTF-16BE', false);\ntestAllValidChars($fromUnicode, 'UTF-16BE', 'EUC-TW', false);\ntestAllInvalidChars($invalid, $toUnicode, 'EUC-TW', 'UTF-16BE', \"\\x00%\");\ntestTruncatedChars($truncated, 'EUC-TW', 'UTF-16BE', \"\\x00%\");\necho \"Tested EUC-TW -> UTF-16BE\\n\";\nfindInvalidChars($fromUnicode, $invalid, $unused, array_fill_keys(range(0,0xFF), 2));\nconvertAllInvalidChars($invalid, $fromUnicode, 'UTF-16BE', 'EUC-TW', '%');\necho \"Tested UTF-16BE -> EUC-TW\\n\";\n// Test \"long\" illegal character markers\nmb_substitute_character(\"long\");\nconvertInvalidString(\"\\x80\", \"%\", \"EUC-TW\", \"UTF-8\");\nconvertInvalidString(\"\\x8E\\x20\", \"%\", \"EUC-TW\", \"UTF-8\");\nconvertInvalidString(\"\\x8E\\xA1\\x20\", \"%\", \"EUC-TW\", \"UTF-8\");\nconvertInvalidString(\"\\x8E\\xA1\\xA1\\x20\", \"%\", \"EUC-TW\", \"UTF-8\");\nconvertInvalidString(\"\\x8E\\xA2\\xA3\\x20\", \"%\", \"EUC-TW\", \"UTF-8\");\nconvertInvalidString(\"\\x8F\", \"%\", \"EUC-TW\", \"UTF-8\");\nconvertInvalidString(\"\\xA1\\x50\", \"%\", \"EUC-TW\", \"UTF-8\");\nconvertInvalidString(\"\\xFD\\xCC\", \"%\", \"EUC-TW\", \"UTF-8\");\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
