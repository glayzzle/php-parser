// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug79037.phpt
  it("Bug #79037: global buffer-overflow in `mbfl_filt_conv_big5_wchar`", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_convert_encoding(\"\\x81\\x3a\", \"UTF-8\", \"CP950\"));\n?>")).toMatchSnapshot();
  });
});
