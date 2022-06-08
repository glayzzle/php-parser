// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_error1.phpt
  it("Test vfprintf() function : error conditions (more than expected arguments)", function () {
    expect(parser.parseCode("<?php\n// Open handle\n$file = 'vfprintf_error1.txt';\n$fp = fopen( $file, \"a+\" );\necho \"\\n-- Testing vfprintf() function with more than expected no. of arguments --\\n\";\n$format = 'string_val';\n$args = array( 1, 2 );\n$extra_arg = 10;\ntry {\n    var_dump( vfprintf( $fp, $format, $args, $extra_arg ) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump( vfprintf( $fp, \"Foo %d\", array(6), \"bar\" ) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n// Close handle\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
