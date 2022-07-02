// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/invalid_types/invalid_parent_type.phpt
  it("parent type cannot take part in an intersection type", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass B extends A {\n    public function foo(): parent&Iterator {}\n}\n?>")).toMatchSnapshot();
  });
});
