// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_get_timetype.phpt
  it("datefmt_get_timetype_code()", function () {
    expect(parser.parseCode("<?php\n/*\n * Test for the datefmt_get_timetype  function\n */\nfunction ut_main()\n{\n    $timetype_arr = array (\n        IntlDateFormatter::FULL,\n        IntlDateFormatter::LONG,\n        IntlDateFormatter::MEDIUM,\n        IntlDateFormatter::SHORT,\n        IntlDateFormatter::NONE\n    );\n    $res_str = '';\n    foreach( $timetype_arr as $timetype_entry )\n    {\n        $res_str .= \"\\nCreating IntlDateFormatter with time_type = $timetype_entry\";\n        $fmt = ut_datefmt_create( \"de-DE\",  IntlDateFormatter::SHORT, $timetype_entry ,'America/Los_Angeles', IntlDateFormatter::GREGORIAN  );\n        $time_type = ut_datefmt_get_timetype( $fmt);\n        $res_str .= \"\\nAfter call to get_timetype :  timetype= $time_type\";\n        $res_str .= \"\\n\";\n    }\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\n// Run the test\nut_run();\n?>")).toMatchSnapshot();
  });
});
