// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/resourcebundle_individual.phpt
  it("Test ResourceBundle::get() and length() - existing/missing keys", function () {
    expect(parser.parseCode("<?php\n    include \"resourcebundle.inc\";\nfunction ut_main() {\n    $str_res = '';\n    // fall back\n    $r = ut_resourcebundle_create( 'en_US', BUNDLE );\n    $str_res .= sprintf( \"length: %d\\n\", ut_resourcebundle_count($r) );\n    $str_res .= sprintf( \"teststring: %s\\n\", ut_resourcebundle_get($r,  'teststring' ) );\n    $str_res .= sprintf( \"testint: %d\\n\", ut_resourcebundle_get($r, 'testint' ) );\n    $str_res .= print_r( ut_resourcebundle_get($r, 'testvector' ), true );\n    $str_res .= sprintf( \"testbin: %s\\n\", bin2hex(ut_resourcebundle_get( $r,'testbin' )) );\n    $r2 = ut_resourcebundle_get($r, 'testtable' );\n    $str_res .= sprintf( \"testtable: %d\\n\", ut_resourcebundle_get($r2, 'major' ) );\n    $r2 = ut_resourcebundle_get($r,'testarray' );\n    $str_res .= sprintf( \"testarray: %s\\n\", ut_resourcebundle_get($r2, 2 ) );\n    $t = ut_resourcebundle_get( $r, 'nonexisting' );\n    $str_res .= debug( $t );\n    // Make sure accessing existing after non-existing works.\n    $t = ut_resourcebundle_get( $r, 'teststring' );\n    $str_res .= debug( $t );\n    return $str_res;\n}\n    include_once( 'ut_common.inc' );\n    ut_run();\n?>")).toMatchSnapshot();
  });
});
