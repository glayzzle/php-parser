// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_get_locale.phpt
  it("datefmt_get_locale()", function () {
    expect(parser.parseCode("<?php\n/*\n * Test for the datefmt_get_locale  function\n */\nfunction ut_main()\n{\n    $locale_arr = array (\n        'de-DE',\n        'sl-IT-nedis',\n        'en_UK',\n        'hi'\n    );\n    $res_str = '';\n    foreach( $locale_arr as $locale_entry )\n    {\n        $res_str .= \"\\nCreating IntlDateFormatter with locale = $locale_entry\";\n        $fmt = ut_datefmt_create( $locale_entry , IntlDateFormatter::SHORT,IntlDateFormatter::SHORT,'America/Los_Angeles', IntlDateFormatter::GREGORIAN  );\n        $locale = ut_datefmt_get_locale( $fmt , 1);\n        $res_str .= \"\\nAfter call to get_locale :  locale= $locale\";\n        $res_str .= \"\\n\";\n    }\n    $badvals = array(100, -1, 4294901761);\n    foreach($badvals as $badval) {\n        if(ut_datefmt_get_locale($fmt, $badval)) {\n            $res_str .= \"datefmt_get_locale should return false for bad argument $badval\\n\";\n        }\n    }\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\n// Run the test\nut_run();\n?>")).toMatchSnapshot();
  });
});
