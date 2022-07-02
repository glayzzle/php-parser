// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_class_methods_002.phpt
  it("get_class_methods(): Testing with interface", function () {
    expect(parser.parseCode("<?php\ninterface A {\n    function a();\n    function b();\n}\nclass B implements A {\n    public function a() { }\n    public function b() { }\n    public function __construct() {\n        var_dump(get_class_methods('A'));\n        var_dump(get_class_methods('B'));\n    }\n    public function __destruct() { }\n}\nnew B;\n?>")).toMatchSnapshot();
  });
});
