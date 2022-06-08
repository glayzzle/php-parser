// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/ob_get_flush_basic.phpt
  it("Test ob_get_flush() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ob_get_flush() : basic functionality ***\\n\";\nob_start();\necho \"testing ob_get_flush() with some\\nNewlines too\\n\";\n$string = ob_get_flush();\nvar_dump( \"this is printed before returning the string\" );\nvar_dump( $string );\nvar_dump( ob_list_handlers() );\n// Empty string expected\nob_start();\n$string = ob_get_flush();\nvar_dump($string)\n?>")).toMatchSnapshot();
  });
});
