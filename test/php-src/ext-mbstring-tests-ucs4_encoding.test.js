// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/ucs4_encoding.phpt
  it("Test verification and conversion of UCS-4 text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\nmb_substitute_character(0x25);\n// Test \"long\" illegal character markers\nmb_substitute_character(\"long\");\nconvertInvalidString(\"\\x6F\\x00\\x00\\x00\", \"U+6F000000\", \"UCS-4BE\", \"UTF-8\");\nconvertInvalidString(\"\\x70\\x00\\x00\\x00\", \"U+70000000\", \"UCS-4BE\", \"UTF-8\");\nconvertInvalidString(\"\\x78\\x00\\x00\\x01\", \"U+78000001\", \"UCS-4BE\", \"UTF-8\");\nconvertInvalidString(\"\\x80\\x01\\x02\\x03\", \"U+80010203\", \"UCS-4BE\", \"UTF-8\");\nconvertInvalidString(\"\\x00\\x01\\x02\", \"%\", \"UCS-4BE\", \"UTF-8\");\nconvertInvalidString(\"\\x00\\x00\\x00\\x6F\", \"U+6F000000\", \"UCS-4LE\", \"UTF-8\");\nconvertInvalidString(\"\\x00\\x00\\x00\\x70\", \"U+70000000\", \"UCS-4LE\", \"UTF-8\");\nconvertInvalidString(\"\\x01\\x00\\x00\\x78\", \"U+78000001\", \"UCS-4LE\", \"UTF-8\");\nconvertInvalidString(\"\\x02\\x01\\x00\", \"%\", \"UCS-4LE\", \"UTF-8\");\necho \"Done!\";\n?>")).toMatchSnapshot();
  });
});
