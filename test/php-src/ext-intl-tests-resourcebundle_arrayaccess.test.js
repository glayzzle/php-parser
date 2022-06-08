// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/resourcebundle_arrayaccess.phpt
  it("Test ResourceBundle array access and count - existing/missing keys", function () {
    expect(parser.parseCode("<?php\n    include \"resourcebundle.inc\";\n    // fall back\n    $r = new ResourceBundle( 'en_US', BUNDLE );\n    printf( \"length: %d\\n\", count($r) );\n    printf( \"teststring: %s\\n\", $r['teststring'] );\n    printf( \"testint: %d\\n\", $r['testint'] );\n    print_r( $r['testvector'] );\n    printf( \"testbin: %s\\n\", bin2hex($r['testbin']) );\n    $r2 = $r['testtable'];\n    printf( \"testtable: %d\\n\", $r2['major'] );\n    $r2 = $r['testarray'];\n    printf( \"testarray: %s\\n\", $r2[2] );\n    $t = $r['nonexisting'];\n    echo debug( $t );\n?>")).toMatchSnapshot();
  });
});
