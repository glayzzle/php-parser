// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_get_locale.phpt
  it("msgfmt_get_locale()", function () {
    expect(parser.parseCode("<?php\n/*\n * Get locale.\n */\nfunction ut_main()\n{\n    $locales = array(\n        'en_UK',\n        'en_US@California',\n        'uk',\n    );\n    $res_str = '';\n    foreach( $locales as $locale )\n    {\n        $fmt = ut_msgfmt_create( $locale, \"Test\" );\n        $res_str .= \"$locale: \" . dump( ut_msgfmt_get_locale( $fmt ) );\n        $res_str .= \"\\n\";\n    }\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\n// Run the test\nut_run();\n?>")).toMatchSnapshot();
  });
});
