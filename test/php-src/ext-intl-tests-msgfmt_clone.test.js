// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_clone.phpt
  it("Cloning msgfmt", function () {
    expect(parser.parseCode("<?php\ninclude_once( 'ut_common.inc' );\n$GLOBALS['oo-mode'] = true;\n$res_str = '';\n/*\n * Clone\n */\n$fmt = ut_msgfmt_create( \"en_US\", \"{0,number} monkeys on {1,number} trees\" );\n// Get default patten.\n$res_str .= \"Formatting result: \" . ut_msgfmt_format( $fmt, array(123, 456) ) . \"\\n\";\n$fmt_clone = clone $fmt;\n// Set a new pattern.\n$pattern = \"{0,number} trees hosting {1,number} monkeys\";\n$res = ut_msgfmt_set_pattern( $fmt, $pattern );\n$res_str .= \"Formatting result: \" . ut_msgfmt_format( $fmt, array(123, 456) ) . \"\\n\";\n$res_str .= \"Formatting clone result: \" . ut_msgfmt_format( $fmt_clone, array(123, 456) ) . \"\\n\";\necho $res_str;\n?>")).toMatchSnapshot();
  });
});
