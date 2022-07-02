// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/add_return_type.phpt
  it("Adding a return type during inheritance is allowed", function () {
    expect(parser.parseCode("<?php\ninterface One {\n    public function a();\n    public function b();\n    public function c();\n    public function d();\n}\ninterface Two extends One {\n    public function a() : stdClass;\n    public function c() : callable;\n    public function b() : array;\n    public function d() : int;\n}\n?>\nDone")).toMatchSnapshot();
  });
});
