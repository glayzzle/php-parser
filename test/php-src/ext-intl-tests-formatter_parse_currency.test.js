// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/formatter_parse_currency.phpt
  it("numfmt_parse_currency()", function () {
    expect(parser.parseCode("<?php\n/*\n * Currency parsing.\n */\nfunction ut_main()\n{\n    $res_str = '';\n    $fmt = ut_nfmt_create( \"en_US\", NumberFormatter::CURRENCY );\n    $pos = 0;\n    $currency = '';\n    $num = ut_nfmt_parse_currency( $fmt, '$9,988,776.65', $currency, $pos );\n    $res_str .= \"$num $currency\\n\";\n    $fmt = ut_nfmt_create( \"en_US\", NumberFormatter::CURRENCY );\n    $pos = 1;\n    $currency = '';\n    $num = ut_nfmt_parse_currency( $fmt, ' $123.45', $currency, $pos );\n    $res_str .=  \"$num $currency\\n\";\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
