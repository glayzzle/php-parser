// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_assert2.phpt
  it("Foo(...) in attribute in assert", function () {
    expect(parser.parseCode("<?php\nassert(function() {\n    #[Foo(...)]\n    class Test {}\n});\n?>")).toMatchSnapshot();
  });
});
