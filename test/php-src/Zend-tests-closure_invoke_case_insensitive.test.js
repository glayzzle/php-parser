// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_invoke_case_insensitive.phpt
  it("Closure::__invoke() is case insensitive", function () {
    expect(parser.parseCode("<?php\n$inc = function(&$n) {\n    $n++;\n};\n$n = 1;\n$inc->__INVOKE($n);\nvar_dump($n);\n?>")).toMatchSnapshot();
  });
});
