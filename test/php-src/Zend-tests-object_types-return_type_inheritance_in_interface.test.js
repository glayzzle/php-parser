// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_types/return_type_inheritance_in_interface.phpt
  it("Adding interface method a object return type during inheritance is allowed", function () {
    expect(parser.parseCode("<?php\ninterface One {\n    public function a();\n}\ninterface Two extends One {\n    public function a() : object;\n}\n$three = new class implements Two {\n    public function a() : object {\n        return 12345;\n    }\n};\n$three->a();\n?>")).toMatchSnapshot();
  });
});
