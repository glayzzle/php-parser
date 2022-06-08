// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/resourcebundle_create.phpt
  it("Test ResourceBundle::__construct() - existing/missing bundles/locales", function () {
    expect(parser.parseCode("<?php\ninclude \"resourcebundle.inc\";\nfunction ut_main() {\n    $str_res = '';\n    // all fine\n    $r1 = ut_resourcebundle_create( 'root', BUNDLE );\n    $str_res .= debug( $r1 );\n    $str_res .= print_r( $r1['teststring'], true).\"\\n\";\n    // non-root one\n    $r1 = ut_resourcebundle_create( 'es', BUNDLE );\n    $str_res .= debug( $r1 );\n    $str_res .= print_r( $r1['teststring'], true).\"\\n\";\n    // fall back\n    $r1 = ut_resourcebundle_create( 'en_US', BUNDLE );\n        $str_res .= debug( $r1 );\n    $str_res .= print_r( $r1['testsring'], true);\n    // fall out\n    $r2 = ut_resourcebundle_create( 'en_US', BUNDLE, false );\n        $str_res .= debug( $r2 );\n    // missing\n    $r3 = ut_resourcebundle_create( 'en_US', 'nonexisting' );\n        $str_res .= debug( $r3 );\n    return $str_res;\n}\n    include_once( 'ut_common.inc' );\n    ut_run();\n?>")).toMatchSnapshot();
  });
});
