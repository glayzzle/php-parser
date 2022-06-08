// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug77418.phpt
  it("Bug #77418 (Heap overflow in utf32be_mbc_to_code)", function () {
    expect(parser.parseCode("<?php\nmb_regex_encoding(\"UTF-32\");\nvar_dump(mb_split(\"\\x00\\x00\\x00\\x5c\\x00\\x00\\x00B\",\"000000000000000000000000000000\"));\n?>")).toMatchSnapshot();
  });
});
