// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/formatter_get_set_pattern.phpt
  it("numfmt_get/set_pattern()", function () {
    expect(parser.parseCode("<?php\n/*\n * Get/set pattern.\n */\nfunction ut_main()\n{\n    $res_str = '';\n    $test_value = 12345.123456;\n    $fmt = ut_nfmt_create( \"en_US\", NumberFormatter::PATTERN_DECIMAL );\n    // Get default patten.\n    $res_str .= \"Default pattern: '\" . ut_nfmt_get_pattern( $fmt ) . \"'\\n\";\n    $res_str .= \"Formatting result: \" . ut_nfmt_format( $fmt, $test_value ) . \"\\n\";\n    // Set a new pattern.\n    $res = ut_nfmt_set_pattern( $fmt, \"0.0\" );\n    if( $res === false )\n        $res_str .= ut_nfmt_get_error_message( $fmt ) . \" (\" . ut_nfmt_get_error_code( $fmt ) . \")\\n\";\n    // Check if the pattern has been changed.\n    $res = ut_nfmt_get_pattern( $fmt );\n    if( $res === false )\n        $res_str .= ut_nfmt_get_error_message( $fmt ) . \" (\" . ut_nfmt_get_error_code( $fmt ) . \")\\n\";\n    $res_str .= \"New pattern: '\" . ut_nfmt_get_pattern( $fmt ) . \"'\\n\";\n    $res_str .= \"Formatted number: \" . ut_nfmt_format( $fmt, $test_value ) . \"\\n\";\n    ut_nfmt_set_pattern($fmt, str_repeat('@', 200));\n    $res_str .= \"New pattern: '\" . ut_nfmt_get_pattern( $fmt ) . \"'\\n\";\n    $res_str .= \"Formatted number: \" . ut_nfmt_format( $fmt, $test_value ) . \"\\n\";\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
