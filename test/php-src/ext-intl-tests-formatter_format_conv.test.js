// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/formatter_format_conv.phpt
  it("numfmt_format() with type conversion", function () {
    expect(parser.parseCode("<?php\nfunction ut_main()\n{\n    $fmt = ut_nfmt_create( 'en_US', NumberFormatter::DECIMAL );\n    $number = 1234567.891234567890000;\n    $str_res = ut_nfmt_format ($fmt, $number, NumberFormatter::TYPE_INT32).\"\\n\";\n    return $str_res;\n}\ninclude_once( 'ut_common.inc' );\n// Run the test\nut_run();\n?>")).toMatchSnapshot();
  });
});
