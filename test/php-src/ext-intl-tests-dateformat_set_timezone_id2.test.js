// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_set_timezone_id2.phpt
  it("datefmt_set_timezone_id_code() icu >= 4.8", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n/*\n * Test for the datefmt_set_timezone_id  function\n */\nfunction ut_main()\n{\n    $timezone_id_arr = array (\n        'America/New_York',\n        'America/Los_Angeles',\n        'America/Chicago',\n        'CN'\n    );\n    $timestamp_entry = 0;\n    $res_str = '';\n    $fmt = ut_datefmt_create( \"en_US\",  IntlDateFormatter::FULL, IntlDateFormatter::FULL, 'US/Pacific' , IntlDateFormatter::GREGORIAN  );\n    $timezone_id = ut_datefmt_get_timezone_id( $fmt );\n    $res_str .= \"\\nAfter creation of the dateformatter :  timezone_id= $timezone_id\\n\";\n    foreach( $timezone_id_arr as $timezone_id_entry )\n    {\n        $res_str .= \"-----------\";\n        $res_str .= \"\\nTrying to set timezone_id= $timezone_id_entry\";\n        ut_datefmt_set_timezone_id( $fmt , $timezone_id_entry );\n        $timezone_id = ut_datefmt_get_timezone_id( $fmt );\n        $res_str .= \"\\nAfter call to set_timezone_id :  timezone_id= $timezone_id\";\n        $formatted = ut_datefmt_format( $fmt, 0);\n        $res_str .= \"\\nFormatting timestamp=0 resulted in  $formatted\";\n        $formatted = ut_datefmt_format( $fmt, 3600);\n        $res_str .= \"\\nFormatting timestamp=3600 resulted in  $formatted\";\n        $res_str .= \"\\n\";\n    }\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\n// Run the test\nut_run();\n?>")).toMatchSnapshot();
  });
});
