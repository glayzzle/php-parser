// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_use_variable_twice.phpt
  it("Closure cannot use one variable twice", function () {
    expect(parser.parseCode("<?php\n$a = 1;\n$fn = function() use ($a, &$a) {\n    $a = 2;\n};\n$fn();\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
