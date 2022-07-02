// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_types/return_type_inheritance_in_class.phpt
  it("Adding class method a object return type during inheritance is allowed", function () {
    expect(parser.parseCode("<?php\nclass One {\n    public function a() {}\n}\nclass Two extends One {\n    public function a() : object {}\n}\n$three = new class extends Two {\n    public function a() : object {\n        return 12345;\n    }\n};\n$three->a();\n?>")).toMatchSnapshot();
  });
});
