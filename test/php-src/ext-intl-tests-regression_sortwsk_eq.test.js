// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/regression_sortwsk_eq.phpt
  it("Regression: sort_wsk() eq but different len.", function () {
    expect(parser.parseCode("<?php\n/*\n * Test sorting strings that have different length but otherwise equal.\n */\nfunction sort_using_locale( $locale, $test_array )\n{\n    $coll = ut_coll_create( $locale );\n    // Sort array.\n    ut_coll_sort_with_sort_keys( $coll, $test_array );\n    // And return the sorted array.\n    return dump( $test_array ) . \"\\n\";\n}\nfunction ut_main()\n{\n    $res_str = '';\n    // Define a couple of arrays.\n    // Each array contains equal strings that differ only in their length.\n    $a1 = array( 'aa', 'aaa', 'a' );\n    $a2 = array( 'пп', 'ппп', 'п' );\n    // Sort them.\n    $res_str .= sort_using_locale( 'en_US', $a1 );\n    $res_str .= sort_using_locale( 'ru_RU', $a2 );\n    return $res_str;\n}\nrequire_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
