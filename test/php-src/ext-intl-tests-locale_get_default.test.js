// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/locale_get_default.phpt
  it("locale_get_default()", function () {
    expect(parser.parseCode("<?php\n/*\n * Try getting the default Locale with different locales\n * with Procedural and Object methods.\n */\nfunction ut_main()\n{\n    $res_str = '';\n    $lang = ut_loc_get_default() ;\n    $res_str .= \"Default locale: $lang\";\n    $res_str .= \"\\n\";\n    locale_set_default('de-DE');\n    $lang = ut_loc_get_default() ;\n    $res_str .= \"Default locale: $lang\";\n    $res_str .= \"\\n\";\n    ini_set('intl.default_locale', 'fr');\n    $lang = ut_loc_get_default() ;\n    $res_str .= \"Default locale: $lang\";\n    $res_str .= \"\\n\";\n    ini_restore(\"intl.default_locale\");\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
