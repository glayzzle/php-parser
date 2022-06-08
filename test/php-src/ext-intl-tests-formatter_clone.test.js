// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/formatter_clone.phpt
  it("Cloning numfmt", function () {
    expect(parser.parseCode("<?php\ninclude_once( 'ut_common.inc' );\n$GLOBALS['oo-mode'] = true;\n$res_str = '';\n/*\n * Clone\n */\n$test_value = 12345.123456;\n$fmt = new NumberFormatter( \"en_US\", NumberFormatter::PATTERN_DECIMAL );\n$res_str .= \"Formatted number: \" . ut_nfmt_format( $fmt, $test_value ) . \"\\n\";\n$fmt_clone = clone $fmt;\n$res = $fmt->setPattern(\"0.0\" );\nif( $res === false )\n    $res_str .= ut_nfmt_get_error_message( $fmt ) . \" (\" . ut_nfmt_get_error_code( $fmt ) . \")\\n\";\n$res_str .= \"Formatted number: \" . ut_nfmt_format( $fmt, $test_value ) . \"\\n\";\n$res_str .= \"Formatted(clone) number: \" . ut_nfmt_format( $fmt_clone, $test_value ) . \"\\n\";\necho $res_str;\n?>")).toMatchSnapshot();
  });
});
