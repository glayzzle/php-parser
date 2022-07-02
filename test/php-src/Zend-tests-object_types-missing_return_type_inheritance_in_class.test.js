// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_types/missing_return_type_inheritance_in_class.phpt
  it("Missing class method a object return type during inheritance", function () {
    expect(parser.parseCode("<?php\nclass One {\n    public function a() : object {}\n}\nclass Two extends One {\n    public function a() {}\n}\n?>")).toMatchSnapshot();
  });
});
