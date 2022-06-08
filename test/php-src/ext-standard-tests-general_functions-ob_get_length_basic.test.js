// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/ob_get_length_basic.phpt
  it("Test ob_get_length() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nfunction dump_string_length( $string )\n{\n    ob_start();\n    echo $string;\n    $len = ob_get_length();\n    ob_end_clean();\n    var_dump( $len );\n}\necho \"*** Testing ob_get_length() : basic functionality ***\\n\";\n// No buffering active\nvar_dump( ob_get_length() );\ndump_string_length( 'foo bar length of a string' );\ndump_string_length( 'plus one' );\ndump_string_length( \"\\0\" );\ndump_string_length( '            lsf' );\ndump_string_length( '' );\ndump_string_length( null );\n?>")).toMatchSnapshot();
  });
});
