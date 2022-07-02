// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_002.phpt
  it("First Class Callable from User", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    return \"OK\";\n}\n$foo = foo(...);\necho $foo();\n?>")).toMatchSnapshot();
  });
});
