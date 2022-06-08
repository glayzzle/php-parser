// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_get_timezone_id.phpt
  it("datefmt_get_timezone_id_code()", function () {
    expect(parser.parseCode("<?php\n/*\n * Test for the datefmt_get_timezone_id  function\n */\nfunction ut_main()\n{\n    $timezone_id_arr = array (\n        'America/New_York',\n        'US/Pacific',\n        'US/Central'\n    );\n    $res_str = '';\n    foreach( $timezone_id_arr as $timezone_id_entry )\n    {\n        $res_str .= \"\\nCreating IntlDateFormatter with timezone_id = $timezone_id_entry\";\n        $fmt = ut_datefmt_create( \"de-DE\",  IntlDateFormatter::SHORT, IntlDateFormatter::SHORT, $timezone_id_entry , IntlDateFormatter::GREGORIAN  );\n        $timezone_id = ut_datefmt_get_timezone_id( $fmt);\n        $res_str .= \"\\nAfter call to get_timezone_id :  timezone_id= $timezone_id\";\n        $res_str .= \"\\n\";\n    }\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\n// Run the test\nut_run();\n?>")).toMatchSnapshot();
  });
});
