// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/collator_get_set_attribute.phpt
  it("get/set_attribute()", function () {
    expect(parser.parseCode("<?php\n/*\n * Try to set/get a collation attribute.\n */\n/*\n * Return current normalication mode.\n */\nfunction check_val( $coll )\n{\n    $val = ut_coll_get_attribute( $coll, Collator::NORMALIZATION_MODE );\n    return sprintf( \"%s\\n\", ( $val == Collator::OFF ? \"off\" : \"on\" ) );\n}\nfunction ut_main()\n{\n    $res = '';\n    $coll = ut_coll_create( 'en_US' );\n    ut_coll_set_attribute( $coll, Collator::NORMALIZATION_MODE, Collator::OFF );\n    $res .= check_val( $coll );\n    ut_coll_set_attribute( $coll, Collator::NORMALIZATION_MODE, Collator::ON );\n    $res .= check_val( $coll );\n    return $res;\n}\ninclude( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
