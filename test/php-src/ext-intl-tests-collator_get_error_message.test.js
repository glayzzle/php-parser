// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/collator_get_error_message.phpt
  it("get_error_message()", function () {
    expect(parser.parseCode("<?php\n/*\n * Retrieve error message.\n */\nfunction ut_main()\n{\n    $res = '';\n    $coll = ut_coll_create( 'ru_RU' );\n    // Try specifying a correct attribute.\n    ut_coll_get_attribute( $coll, Collator::NORMALIZATION_MODE );\n    $status = ut_coll_get_error_message( $coll );\n    $res .= $status . \"\\n\";\n    // Try specifying an incorrect attribute.\n    ut_coll_get_attribute( $coll, 12345 );\n    $status = ut_coll_get_error_message( $coll );\n    $res .= $status . \"\\n\";\n    return $res;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
