// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/base_convert_improvements.phpt
  it("Test base_convert() - see https://wiki.php.net/rfc/base_convert_improvements", function () {
    expect(parser.parseCode("<?php\necho base_convert('FF', 16, 10) . \"\\n\";\necho base_convert('20', 8, 10) . \"\\n\";\necho base_convert('0xFf', 16, 10) . \"\\n\";\necho base_convert('0FF', 16, 10) . \"\\n\";\necho base_convert(\" 0xFF\\t\\n\" , 16, 10) . \"\\n\";\necho base_convert(\" 0xFF\\t\\n\" , 16, 10) . \"\\n\";\necho base_convert(\"\\r\\nFF\\t\\n\" , 16, 10) . \"\\n\";\necho base_convert(\"0o7\" , 8, 10) . \"\\n\";\necho base_convert(\"0b1010\" , 2, 10) . \"\\n\";\necho \"=======================================\";\n// These should fail\necho base_convert('fg', 16, 10);\necho base_convert('f 0xff ', 16, 10);\necho base_convert('1xff ', 16, 10);\necho base_convert(chr(0), 16, 10);\necho base_convert(\"0o7\" , 9, 10);\necho base_convert(\"0 0\" , 9, 10) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
