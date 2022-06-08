// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_get_set_pattern.phpt
  it("msgfmt_get/set_pattern()", function () {
    expect(parser.parseCode("<?php\n/*\n * Get/set pattern.\n */\nfunction ut_main()\n{\n    $res_str = '';\n    $fmt = ut_msgfmt_create( \"en_US\", \"{0,number} monkeys on {1,number} trees\" );\n    // Get default patten.\n    $res_str .= \"Default pattern: '\" . ut_msgfmt_get_pattern( $fmt ) . \"'\\n\";\n    $res_str .= \"Formatting result: \" . ut_msgfmt_format( $fmt, array(123, 456) ) . \"\\n\";\n    // Set a new pattern.\n    $pattern = \"{0,number} trees hosting {1,number} monkeys\";\n    $res = ut_msgfmt_set_pattern( $fmt, $pattern );\n    if( $res === false )\n        $res_str .= ut_msgfmt_get_error_message( $fmt ) . \" (\" . ut_msgfmt_get_error_code( $fmt ) . \")\\n\";\n    // Check if the pattern has been changed.\n    $res = ut_msgfmt_get_pattern( $fmt );\n    if( $res === false )\n        $res_str .= ut_msgfmt_get_error_message( $fmt ) . \" (\" . ut_msgfmt_get_error_code( $fmt ) . \")\\n\";\n    $res_str .= \"New pattern: '\" . ut_msgfmt_get_pattern( $fmt ) . \"'\\n\";\n    $res_str .= \"Formatted message: \" . ut_msgfmt_format( $fmt, array(123, 456) ) . \"\\n\";\n    ut_msgfmt_set_pattern($fmt, str_repeat($pattern, 10));\n    $res_str .= \"New pattern: '\" . ut_msgfmt_get_pattern( $fmt ) . \"'\\n\";\n    $res_str .= \"Formatted message: \" . ut_msgfmt_format( $fmt, array(123, 456) ) . \"\\n\";\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
