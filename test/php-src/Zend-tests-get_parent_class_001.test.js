// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_parent_class_001.phpt
  it("Testing get_parent_class()", function () {
    expect(parser.parseCode("<?php\ninterface ITest {\n    function foo();\n}\nabstract class bar implements ITest {\n    public function foo() {\n        var_dump(get_parent_class());\n    }\n}\nclass foo extends bar {\n    public function __construct() {\n        var_dump(get_parent_class());\n    }\n}\n$a = new foo;\n$a->foo();\n?>")).toMatchSnapshot();
  });
});
