// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/collator_get_error_code.phpt
  it("get_error_code()", function () {
    expect(parser.parseCode("<?php\n/*\n * Retrieve error code.\n */\n/*\n * Check if error code equals to expected one.\n */\nfunction check_rc( $rc, $expected )\n{\n    return ( $rc === $expected ? \"ok\" : \"failed\" ) . \"\\n\";\n}\nfunction ut_main()\n{\n    $res = '';\n    $coll = ut_coll_create( 'ru_RU' );\n    // Try specifying a correct attribute.\n    ut_coll_get_attribute( $coll, Collator::NORMALIZATION_MODE );\n    $status = ut_coll_get_error_code( $coll );\n    $res .= check_rc( $status, U_ZERO_ERROR );\n    // Try specifying an incorrect attribute.\n    ut_coll_get_attribute( $coll, 12345 );\n    $status = ut_coll_get_error_code( $coll );\n    $res .= check_rc( $status, U_ILLEGAL_ARGUMENT_ERROR );\n    return $res;\n}\n# Suppress warning messages.\nerror_reporting( E_ERROR );\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
