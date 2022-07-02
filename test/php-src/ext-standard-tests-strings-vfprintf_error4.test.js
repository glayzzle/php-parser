// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_error4.phpt
  it("Test vfprintf() function : error conditions (various conditions)", function () {
    expect(parser.parseCode("<?php\n// Open handle\n$file = 'vfprintf_error4.txt';\n$fp = fopen( $file, \"a+\" );\necho \"\\n-- Testing vfprintf() function with other strangeties  --\\n\";\ntry {\n    var_dump( vfprintf( 'foo', 'bar', array( 'baz' ) ) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump( vfprintf( $fp, 'Foo %$c-0202Sd', array( 2 ) ) );\n} catch(\\ValueError $e) {\n    print('Error found: '.$e->getMessage().\".\\n\");\n}\n// Close handle\nfclose( $fp );\n?>")).toMatchSnapshot();
  });
});
