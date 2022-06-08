// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/formatter_parse.phpt
  it("numfmt_parse()", function () {
    expect(parser.parseCode("<?php\n/*\n * Number parsing.\n */\nfunction ut_main()\n{\n    $res_str = '';\n    // Test parsing float number.\n    $fmt = ut_nfmt_create( \"en_US\", NumberFormatter::DECIMAL );\n    $res_str .= ut_nfmt_parse( $fmt, \"123E-3\" ) . \"\\n\";\n    // Test parsing float number as integer.\n    $fmt = ut_nfmt_create( \"en_US\", NumberFormatter::DECIMAL );\n    $res_str .= ut_nfmt_parse( $fmt, \"1.23\", NumberFormatter::TYPE_INT32 ) . \"\\n\";\n    // Test specifying non-zero parsing start position.\n    $fmt = ut_nfmt_create( \"en_US\", NumberFormatter::DECIMAL );\n    $pos = 2;\n    $res_str .= ut_nfmt_parse( $fmt, \"0.123 here\", NumberFormatter::TYPE_DOUBLE, $pos ) . \"\\n\";\n    $res_str .= \"$pos\\n\";\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
