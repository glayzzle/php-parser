// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_008.phpt
  it("First Class Callable from NEW", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n}\nnew Foo(...);\n?>")).toMatchSnapshot();
  });
});
