// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/armscii8_encoding.phpt
  it("Exhaustive test of verification and conversion of ARMSCII-8 text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\nsrand(111); // Make results consistent\nmb_substitute_character(0x25); // '%'\nreadConversionTable(__DIR__ . '/data/ARMSCII-8.txt', $toUnicode, $fromUnicode);\n$irreversible = [\"\\x28\", \"\\x29\", \"\\x2C\", \"\\x2D\", \"\\x2E\"];\nfindInvalidChars($toUnicode, $invalid, $truncated);\ntestAllValidChars($toUnicode, 'ARMSCII-8', 'UTF-16BE', false);\nforeach ($irreversible as $char)\n  unset($toUnicode[$char]);\ntestAllValidChars($toUnicode, 'ARMSCII-8', 'UTF-16BE');\ntestAllInvalidChars($invalid, $toUnicode, 'ARMSCII-8', 'UTF-16BE', \"\\x00%\");\ntestTruncatedChars($truncated, 'ARMSCII-8', 'UTF-16BE', \"\\x00%\");\necho \"Tested ARMSCII-8 -> UTF-16BE\\n\";\nfindInvalidChars($fromUnicode, $invalid, $unused, array_fill_keys(range(0,0xFF), 2));\nconvertAllInvalidChars($invalid, $fromUnicode, 'UTF-16BE', 'ARMSCII-8', '%');\necho \"Tested UTF-16BE -> ARMSCII-8\\n\";\n// Test \"long\" illegal character markers\nmb_substitute_character(\"long\");\nconvertInvalidString(\"\\xA1\", \"%\", \"ARMSCII-8\", \"UTF-8\");\nconvertInvalidString(\"\\xFF\", \"%\", \"ARMSCII-8\", \"UTF-8\");\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
