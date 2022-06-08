// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/formatter_get_error.phpt
  it("numfmt_get_error_message/code()", function () {
    expect(parser.parseCode("<?php\n/*\n * Error handling.\n */\nfunction ut_main()\n{\n    $fmt = ut_nfmt_create( \"en_US\", NumberFormatter::CURRENCY );\n    $currency = '';\n    $pos = 0;\n    $num = ut_nfmt_parse_currency( $fmt, '123.45', $currency, $pos );\n    if( $num === false )\n        return $fmt->getErrorMessage() . \" (\" . $fmt->getErrorCode() . \")\\n\";\n    else\n        return \"Ooops, an error should have occurred.\";\n}\ninclude_once( 'ut_common.inc' );\n// Run the test\nut_run();\n?>")).toMatchSnapshot();
  });
});
