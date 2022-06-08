// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug67397.phpt
  it("Bug #67397 (Buffer overflow in locale_get_display_name->uloc_getDisplayName (libicu 4.8.1))", function () {
    expect(parser.parseCode("<?php\nfunction ut_main()\n{\n    $ret = var_export(ut_loc_get_display_name(str_repeat('*', 256), 'en_us'), true);\n    $ret .= \"\\n\";\n    $ret .= var_export(intl_get_error_message(), true);\n    return $ret;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
