// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/multibyte/multibyte_encoding_001.phpt
  it("Zend Multibyte and ShiftJIS", function () {
    expect(parser.parseCode("<?php\ndeclare(encoding='Shift_JIS');\n$s = \"�\\\"; // 0x95+0x5c in script, not somewhere else \"\nprintf(\"%x:%x\", ord($s[0]), ord($s[1]));\n?>")).toMatchSnapshot();
  });
});
