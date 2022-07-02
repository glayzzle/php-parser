// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_types/missing_return_type_inheritance_in_interface.phpt
  it("Missing interface method a object return type during inheritance", function () {
    expect(parser.parseCode("<?php\ninterface One {\n    public function a() : object;\n}\ninterface Two extends One {\n    public function a();\n}\n?>")).toMatchSnapshot();
  });
});
