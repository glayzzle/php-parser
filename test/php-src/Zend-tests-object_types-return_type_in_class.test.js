// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_types/return_type_in_class.phpt
  it("Adding a class method object return type", function () {
    expect(parser.parseCode("<?php\ninterface One {\n    public function a() : object;\n}\nclass Two implements One {\n    public function a() : object {}\n}\n$three = new class extends Two {\n    public function a() : object {\n        return 12345;\n    }\n};\n$three->a();\n?>")).toMatchSnapshot();
  });
});
