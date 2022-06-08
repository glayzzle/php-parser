// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_types/type_hint_in_class_method.phpt
  it("Adding a class method object type hint", function () {
    expect(parser.parseCode("<?php\nclass One {\n    public function a(object $obj) {}\n}\n$one = new One();\n$one->a(new One());\n$one->a(123);\n?>")).toMatchSnapshot();
  });
});
