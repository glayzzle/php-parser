// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/collator_get_set_strength.phpt
  it("get/set_strength()", function () {
    expect(parser.parseCode("<?php\n/*\n * Try to set/get collation strength.\n */\n/*\n * Set given collation strength, then get it back\n * and check if it's the same.\n */\nfunction check_set_strength( $coll, $val )\n{\n    ut_coll_set_strength( $coll, $val );\n    $new_val = ut_coll_get_strength( $coll );\n    return ( $new_val == $val ? \"ok\" : \"failed\" ) . \"\\n\";\n}\nfunction ut_main()\n{\n    $res = '';\n    $coll = ut_coll_create( 'en_US' );\n    $res .= check_set_strength( $coll, Collator::PRIMARY );\n    $res .= check_set_strength( $coll, Collator::SECONDARY );\n    $res .= check_set_strength( $coll, Collator::TERTIARY );\n    return $res;\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
