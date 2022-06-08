// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/collation_customization.phpt
  it("Collation customization", function () {
    expect(parser.parseCode("<?php\n/*\n * Check effects of changing misc collattion options.\n */\nfunction cmp_array( &$coll, $a )\n{\n    $res = '';\n    $prev = null;\n    foreach( $a as $i )\n    {\n        if( is_null( $prev ) )\n            $res .= \"$i\";\n        else\n        {\n            $eqrc = ut_coll_compare( $coll, $prev, $i );\n            $eq = $eqrc < 0 ? \"<\" : ( $eqrc > 0 ? \">\" : \"=\" );\n            $res .= \" $eq $i\";\n        }\n        $prev = $i;\n    }\n    $res .= \"\\n\";\n    return $res;\n}\nfunction check_alternate_handling( &$coll )\n{\n    $res = '';\n    ut_coll_set_strength( $coll, Collator::TERTIARY );\n    ut_coll_set_attribute( $coll, Collator::ALTERNATE_HANDLING, Collator::NON_IGNORABLE );\n    $res .= cmp_array( $coll, array( 'di Silva', 'Di Silva', 'diSilva', 'U.S.A.', 'USA' ) );\n    ut_coll_set_attribute( $coll, Collator::ALTERNATE_HANDLING, Collator::SHIFTED );\n    $res .= cmp_array( $coll, array( 'di Silva', 'diSilva', 'Di Silva', 'U.S.A.', 'USA' ) );\n    ut_coll_set_strength( $coll, Collator::QUATERNARY );\n    $res .= cmp_array( $coll, array( 'di Silva', 'diSilva', 'Di Silva', 'U.S.A.', 'USA' ) );\n    $res .= \"\\n\";\n    return $res;\n}\nfunction ut_main()\n{\n    $coll = ut_coll_create( 'en_US' );\n    return\n        check_alternate_handling( $coll );\n}\ninclude_once( 'ut_common.inc' );\nut_run();\n?>")).toMatchSnapshot();
  });
});
