// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug69086.phpt
  it("Request #69086 (enhancement for mb_convert_encoding)", function () {
    expect(parser.parseCode("<?php\nmb_substitute_character(0xfffd);\nvar_dump(\"?\" === mb_convert_encoding(\"\\x80\", \"Shift_JIS\", \"EUC-JP\"));\nmb_internal_encoding(\"UCS-4BE\");\nvar_dump(\"\\x00\\x00\\xff\\xfd\" === mb_convert_encoding(\"\\x80\", \"UCS-4BE\", \"UTF-8\"));\nmb_internal_encoding(\"UTF-8\");\nmb_substitute_character(0xfffd);\nvar_dump(\"\\u{fffd}\" === mb_convert_encoding(\"\\x80\", \"UTF-8\", \"EUC-JP-2004\"));\n?>")).toMatchSnapshot();
  });
});
