// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/multibyte/multibyte_encoding_006.phpt
  it("Scripts with flex-incompatible encoding without suitable conversion strategy", function () {
    expect(parser.parseCode("��\u0000\u0000<\u0000\u0000\u0000?\u0000\u0000\u0000p\u0000\u0000\u0000h\u0000\u0000\u0000p\u0000\u0000\u0000\n\u0000\u0000\u0000e\u0000\u0000\u0000c\u0000\u0000\u0000h\u0000\u0000\u0000o\u0000\u0000\u0000 \u0000\u0000\u0000\"\u0000\u0000\u0000h\u0000\u0000\u0000e\u0000\u0000\u0000l\u0000\u0000\u0000l\u0000\u0000\u0000o\u0000\u0000\u0000 \u0000\u0000\u0000w\u0000\u0000\u0000o\u0000\u0000\u0000r\u0000\u0000\u0000l\u0000\u0000\u0000d\u0000\u0000\u0000\"\u0000\u0000\u0000;\u0000\u0000\u0000\n\u0000\u0000\u0000")).toMatchSnapshot();
  });
});
