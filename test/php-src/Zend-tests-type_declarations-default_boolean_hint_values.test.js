// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/default_boolean_hint_values.phpt
  it("Default values for boolean hints should work", function () {
    expect(parser.parseCode("<?php\nfunction foo(bool $x = true, bool $y = false) {\n    var_dump($x, $y);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
