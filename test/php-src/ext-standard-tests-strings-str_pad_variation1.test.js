// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_pad_variation1.phpt
  it("Test str_pad() function : usage variations - large values for '$pad_length' argument", function () {
    expect(parser.parseCode("<?php\n/* Test str_pad() function: with unexpected inputs for '$pad_length'\n *  and expected type for '$input'\n*/\necho \"*** Testing str_pad() function: with large value for for 'pad_length' argument ***\\n\";\n//defining '$input' argument\n$input = \"Test string\";\n$extra_large_pad_length = PHP_INT_MAX*5;\ntry {\n    var_dump( str_pad($input, $extra_large_pad_length) );\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n$php_int_max_pad_length = PHP_INT_MAX;\nvar_dump( str_pad($input, $php_int_max_pad_length) );\n?>")).toMatchSnapshot();
  });
});
