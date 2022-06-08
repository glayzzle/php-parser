// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/ucs2_encoding.phpt
  it("Test verification and conversion of UCS-2 text", function () {
    expect(parser.parseCode("<?php\ninclude('encoding_tests.inc');\nmb_substitute_character(0x25);\n// Test \"long\" illegal character markers\nmb_substitute_character(\"long\");\nconvertInvalidString(\"\\x00\\x01\\x02\\x03\", \"\\x00U\\x00+\\x001\\x000\\x002\\x000\\x003\", \"UTF-32BE\", \"UCS-2BE\");\nconvertInvalidString(\"\\x11\", \"%\", \"UCS-2BE\", \"UTF-8\");\nconvertInvalidString(\"\\x00\\x01\\x02\\x03\", \"U\\x00+\\x001\\x000\\x002\\x000\\x003\\x00\", \"UTF-32BE\", \"UCS-2LE\");\nconvertInvalidString(\"\\x11\", \"%\", \"UCS-2LE\", \"UTF-8\");\necho \"Done!\";\n?>")).toMatchSnapshot();
  });
});
