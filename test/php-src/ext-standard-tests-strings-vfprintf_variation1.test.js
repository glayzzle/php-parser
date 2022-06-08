// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_variation1.phpt
  it("Test vfprintf() function : variation functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vfprintf() : variation functionality ***\\n\";\n// Open handle\n$file = 'vfprintf_variation1.txt';\n$fp = fopen( $file, 'a+' );\n$funset = fopen( __FILE__, 'r' );\nunset( $funset );\nclass FooClass\n{\n    public function __toString()\n    {\n        return \"Object\";\n    }\n}\n// Output facilitating function\nfunction writeAndDump($fp, $format, $args)\n{\n    try {\n        ftruncate( $fp, 0 );\n        $length = vfprintf( $fp, $format, $args );\n        rewind( $fp );\n        $content = stream_get_contents( $fp );\n        var_dump( $content );\n        var_dump( $length );\n    } catch (TypeError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n}\n// Test vfprintf()\nwriteAndDump( $fp, \"format\", null );\nwriteAndDump( $fp, \"Foo is %d and %s\", array( 30, 'bar' ) );\nwriteAndDump( $fp, \"Foobar testing\", array() );\nwriteAndDump( $fp, \"%s %s %s\", array( 'bar', 'bar', 'bar' ) );\nwriteAndDump( $fp, \"%02d\", array( 50 ) );\nwriteAndDump( $fp, \"\", array() );\nwriteAndDump( $fp, \"Testing %b %d %f %o %s %x %X\", array( 9, 6, 2.5502, 24, \"foobar\", 15, 65 ) );\n// Close handle\nfclose( $fp );\n?>")).toMatchSnapshot();
  });
});
