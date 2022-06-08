// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/iso8859_encodings.phpt
  it("Exhaustive test of verification and conversion of ISO-8859-X text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\nfor ($n = 1; $n <= 16; $n++) {\n    if ($n == 11 || $n == 12)\n        continue;\n    testEncodingFromUTF16ConversionTable(__DIR__ . \"/data/8859-$n.txt\", \"ISO-8859-{$n}\");\n}\n// Test \"long\" illegal character markers\nmb_substitute_character(\"long\");\nconvertInvalidString(\"\\xAE\", \"%\", \"ISO8859-7\", \"UTF-8\");\nconvertInvalidString(\"\\xFF\", \"%\", \"ISO8859-8\", \"UTF-8\");\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
