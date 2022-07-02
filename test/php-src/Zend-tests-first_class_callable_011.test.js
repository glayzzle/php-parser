// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_011.phpt
  it("First Class Callable Attribute Error", function () {
    expect(parser.parseCode("<?php\n#[Attribute(...)]\nclass Foo {\n}\n?>")).toMatchSnapshot();
  });
});
