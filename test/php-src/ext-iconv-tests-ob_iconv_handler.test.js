// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/ob_iconv_handler.phpt
  it("ob_iconv_handler()", function () {
    expect(parser.parseCode("<?php\niconv_set_encoding('internal_encoding', 'EUC-JP');\niconv_set_encoding('output_encoding', 'Shift_JIS');\nob_start('ob_iconv_handler');\nprint \"����������\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
