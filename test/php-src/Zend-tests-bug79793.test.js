// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79793.phpt
  it("Bug #79793: Use after free if string used in undefined index warning is changed", function () {
    expect(parser.parseCode("<?php\n$key = \"foo\";\n$key .= \"bar\";\nset_error_handler(function($_, $m) use (&$key) {\n    echo \"$m\\n\";\n    $key .= \"baz\";\n});\n$ary = [];\n$ary[$key]++;\nvar_dump($ary);\n$ary[$key] += 1;\nvar_dump($ary);\n?>")).toMatchSnapshot();
  });
});
