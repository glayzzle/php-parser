// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_types/type_hint_in_function.phpt
  it("Adding a function object type hint", function () {
    expect(parser.parseCode("<?php\nclass A {}\nfunction a(object $obj) {}\na(new A());\na(123);\n?>")).toMatchSnapshot();
  });
});
