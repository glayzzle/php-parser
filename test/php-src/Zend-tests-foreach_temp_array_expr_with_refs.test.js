// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_temp_array_expr_with_refs.phpt
  it("Temporary array expressions can be iterated by reference", function () {
    expect(parser.parseCode("<?php\n$a = 'a';\n$b = 'b';\nforeach ([&$a, &$b] as &$value) {\n    $value .= '-foo';\n}\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
