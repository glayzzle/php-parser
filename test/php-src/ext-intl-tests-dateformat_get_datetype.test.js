// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/dateformat_get_datetype.phpt
  it("datefmt_get_datetype_code()", function () {
    expect(parser.parseCode("<?php\n/*\n * Test for the datefmt_get_datetype  function\n */\nfunction ut_main()\n{\n    $datetype_arr = array (\n        IntlDateFormatter::FULL,\n        IntlDateFormatter::LONG,\n        IntlDateFormatter::MEDIUM,\n        IntlDateFormatter::SHORT,\n        IntlDateFormatter::NONE\n    );\n    $res_str = '';\n    foreach( $datetype_arr as $datetype_entry )\n    {\n        $res_str .= \"\\nCreating IntlDateFormatter with date_type = $datetype_entry\";\n        $fmt = ut_datefmt_create( \"de-DE\",  $datetype_entry , IntlDateFormatter::SHORT,'America/Los_Angeles', IntlDateFormatter::GREGORIAN  );\n        $date_type = ut_datefmt_get_datetype( $fmt);\n        $res_str .= \"\\nAfter call to get_datetype :  datetype= $date_type\";\n        $res_str .= \"\\n\";\n    }\n    return $res_str;\n}\ninclude_once( 'ut_common.inc' );\n// Run the test\nut_run();\n?>")).toMatchSnapshot();
  });
});
