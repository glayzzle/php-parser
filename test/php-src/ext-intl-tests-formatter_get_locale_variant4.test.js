// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/formatter_get_locale_variant4.phpt
  it("numfmt_get_locale()", function () {
    expect(parser.parseCode("<?php\n/*\n * Get locale.\n */\nfunction ut_main()\n{\n    $locales = array(\n        'en_UK',\n        'en_US',\n        'fr_CA',\n    );\n    $loc_types = array(\n        Locale::ACTUAL_LOCALE    => 'actual',\n        Locale::VALID_LOCALE     => 'valid',\n    );\n    $res_str = '';\n    foreach( $locales as $locale )\n    {\n        $fmt = ut_nfmt_create( $locale, NumberFormatter::DECIMAL );\n        $res_str .= \"$locale: \";\n        foreach( $loc_types as $loc_type => $loc_type_name )\n            $res_str .= sprintf( \" %s=%s\",\n            $loc_type_name,\n            dump( ut_nfmt_get_locale( $fmt, $loc_type ) ) );\n        $res_str .= \"\\n\";\n    }\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\n// Run the test\nut_run();\n?>")).toMatchSnapshot();
  });
});
