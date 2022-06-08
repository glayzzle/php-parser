// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_009.phpt
  it("First Class Callable from Closure::__invoke", function () {
    expect(parser.parseCode("<?php\n$closure = function() {\n    return \"OK\";\n};\n$foo = $closure->__invoke(...);\necho $foo();\n?>")).toMatchSnapshot();
  });
});
