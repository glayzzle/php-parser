// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/multibyte/multibyte_encoding_003.phpt
  it("Zend Multibyte and UTF-16 BOM", function () {
    expect(parser.parseCode("��<\u0000?\u0000p\u0000h\u0000p\u0000\n\u0000p\u0000r\u0000i\u0000n\u0000t\u0000 \u0000\"\u0000H\u0000e\u0000l\u0000l\u0000o\u0000 \u0000W\u0000o\u0000r\u0000l\u0000d\u0000\\\u0000n\u0000\"\u0000;\u0000\n\u0000?\u0000>\u0000\n\u0000=\u0000=\u0000=\u0000D\u0000O\u0000N\u0000E\u0000=\u0000=\u0000=\u0000\n\u0000")).toMatchSnapshot();
  });
});
