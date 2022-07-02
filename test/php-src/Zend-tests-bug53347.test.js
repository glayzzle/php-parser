// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug53347.phpt
  it("Bug #53347 Segfault accessing static method", function () {
    expect(parser.parseCode("<?php class ezcConsoleOutput\n{\n    protected static $color = array( 'gray' => 30 );\n    public static function isValidFormatCode( $type, $key )\n    {\n        return isset( self::${$type}[$key] );\n    }\n}\nvar_dump( ezcConsoleOutput::isValidFormatCode( 'color', 'gray' ) );\n?>")).toMatchSnapshot();
  });
});
