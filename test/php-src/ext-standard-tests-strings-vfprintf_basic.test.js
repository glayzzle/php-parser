// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_basic.phpt
  it("Test vfprintf() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nfunction writeAndDump($fp, $format, $args)\n{\n    ftruncate( $fp, 0 );\n    $length = vfprintf( $fp, $format, $args );\n    rewind( $fp );\n    $content = stream_get_contents( $fp );\n    var_dump( $content );\n    var_dump( $length );\n}\necho \"*** Testing vfprintf() : basic functionality ***\\n\";\n// Open handle\n$file = 'vfprintf_basic.txt';\n$fp = fopen( $file, \"a+\" );\n// Test vfprintf()\nwriteAndDump( $fp, \"Foo is %d and %s\", array( 30, 'bar' ) );\nwriteAndDump( $fp, \"%s %s %s\", array( 'bar', 'bar', 'bar' ) );\nwriteAndDump( $fp, \"%d digit\", array( '54' ) );\nwriteAndDump( $fp, \"%b %b\", array( true, false ) );\nwriteAndDump( $fp, \"%c %c %c\", array( 65, 66, 67 ) );\nwriteAndDump( $fp, \"%e %E %e\", array( 1000, 2e4, +2e2 ) );\nwriteAndDump( $fp, \"%02d\", array( 50 ) );\nwriteAndDump( $fp, \"Testing %b %d %f %s %x %X\", array( 9, 6, 2.5502, \"foobar\", 15, 65 ) );\n// Close handle\nfclose( $fp );\n?>")).toMatchSnapshot();
  });
});
