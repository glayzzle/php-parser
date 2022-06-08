// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/regression_sortwsk_and_cow.phpt
  it("Regression: sort_wsk() and copy-on-write.", function () {
    expect(parser.parseCode("<?php\n/*\n * Check if collator_sort_with_sort_keys()\n * properly supports copy-on-write.\n */\n/* Create two copies of the given array.\n * Sort the array and the first copy.\n * Check if the second copy remains unsorted.\n */\nfunction test_COW( $locale, $test_array )\n{\n    $res_str = '';\n    $coll = ut_coll_create( $locale );\n    // Create two copies of the given array.\n    $copy1 = $test_array;\n    $copy2 = $test_array;\n    // Sort given array and the first copy of it.\n    ut_coll_sort_with_sort_keys( $coll, $test_array );\n    ut_coll_sort_with_sort_keys( $coll, $copy1      );\n    // Return contents of all the arrays.\n    // The second copy should remain unsorted.\n    $res_str .= dump( $test_array ) . \"\\n\";\n    $res_str .= dump( $copy1      ) . \"\\n\";\n    $res_str .= dump( $copy2      ) . \"\\n\";\n    return $res_str;\n}\nfunction ut_main()\n{\n    $res_str = '';\n    $a1 = array( 'b', 'a', 'c' );\n    $a2 = array( 'в', 'а', 'б' );\n    $res_str .= test_COW( 'en_US', $a1 );\n    $res_str .= test_COW( 'ru_RU', $a2 );\n    return $res_str;\n}\nrequire_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
