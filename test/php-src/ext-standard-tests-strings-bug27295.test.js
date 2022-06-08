// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug27295.phpt
  it("Bug #27295 (memory leak inside sscanf())", function () {
    expect(parser.parseCode("<?php\n$strings = array(\"foo = bar\", \"bar = foo\");\nforeach( $strings as $string )\n{\n    sscanf( $string, \"%s = %[^[]]\", $var, $val );\n    echo \"$var = $val\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
