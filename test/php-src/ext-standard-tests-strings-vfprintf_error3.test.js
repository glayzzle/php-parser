// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_error3.phpt
  it("Test vfprintf() function : error conditions (wrong argument types)", function () {
    expect(parser.parseCode("<?php\n// Open handle\n$file = 'vfprintf_error3.txt';\n$fp = fopen( $file, \"a+\" );\necho \"\\n-- Testing vfprintf() function with wrong variable types as argument --\\n\";\ntry {\n  vfprintf($fp, array( 'foo %d', 'bar %s' ), 3.55552);\n} catch (TypeError $exception) {\n  echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    vfprintf($fp, \"Foo: %s\", \"not available\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    vfprintf($fp, \"Foo %y fake\", [\"not available\"]);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nrewind( $fp );\nvar_dump( stream_get_contents( $fp ) );\nftruncate( $fp, 0 );\nrewind( $fp );\n// Close handle\nfclose( $fp );\n?>")).toMatchSnapshot();
  });
});
