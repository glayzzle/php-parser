// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug72533.phpt
  it("Bug #72533 (locale_accept_from_http out-of-bounds access)", function () {
    expect(parser.parseCode("<?php\nfunction ut_main()\n{\n    $ret = var_export(ut_loc_accept_http(str_repeat('x', 256)), true);\n    $ret .= \"\\n\";\n    if(intl_is_failure(intl_get_error_code())) {\n        $ret .= var_export(intl_get_error_message(), true);\n    }\n    $ret .= \"\\n\";\n    $ret .= var_export(ut_loc_accept_http(str_repeat('en,', 256)), true);\n    $ret .= \"\\n\";\n    if(intl_is_failure(intl_get_error_code())) {\n        $ret .= var_export(intl_get_error_message(), true);\n    }\n    return $ret;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
