// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_clone2.phpt
  it("Cloning datefmt icu >= 4.8", function () {
    expect(parser.parseCode("<?php\ninclude_once( 'ut_common.inc' );\n$GLOBALS['oo-mode'] = true;\n$res_str = '';\n/*\n * Clone\n */\n$start_pattern = 'dd-MM-YY';\n$fmt = ut_datefmt_create( \"en-US\",  IntlDateFormatter::FULL, IntlDateFormatter::FULL, 'America/New_York', IntlDateFormatter::GREGORIAN , $start_pattern );\n$formatted = ut_datefmt_format($fmt,0);\n$res_str .= \"\\nResult of formatting timestamp=0 is :  \\n$formatted\";\n$fmt_clone = clone $fmt;\nut_datefmt_set_pattern( $fmt , 'yyyy-DDD.hh:mm:ss z' );\n$formatted = ut_datefmt_format($fmt,0);\n$res_str .= \"\\nResult of formatting timestamp=0 is :  \\n$formatted\";\n$formatted = ut_datefmt_format($fmt_clone,0);\n$res_str .= \"\\nResult of clone formatting timestamp=0 is :  \\n$formatted\";\necho $res_str;\n?>")).toMatchSnapshot();
  });
});
