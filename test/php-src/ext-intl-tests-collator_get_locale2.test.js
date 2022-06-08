// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/collator_get_locale2.phpt
  it("get_locale() icu >= 4.8", function () {
    expect(parser.parseCode("<?php\n/*\n * Try to specify valid and invalid locale types when getting locale.\n */\nfunction ut_main()\n{\n    $locales = array(\n        Locale::VALID_LOCALE,\n        Locale::ACTUAL_LOCALE,\n        100,\n        -100,\n        -9999999999999,\n        9999999999999,\n    );\n    $coll = ut_coll_create( 'en_US' );\n    $res_str = '';\n    foreach( $locales as $locale )\n    {\n        $rc = ut_coll_get_locale( $coll, $locale );\n        $res_str .= sprintf(\n            \"Locale of type %s is %s\\n\",\n            dump( $locale ),\n            dump( $rc ) );\n    }\n    return $res_str . \"\\n\";\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
