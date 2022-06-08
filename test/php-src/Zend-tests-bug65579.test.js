// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug65579.phpt
  it("Bug #65579 (Using traits with get_class_methods causes segfault)", function () {
    expect(parser.parseCode("<?php\ntrait ParentTrait {\n    public function testMethod() { }\n}\ntrait ChildTrait {\n    use ParentTrait {\n        testMethod as testMethodFromParentTrait;\n    }\n    public function testMethod() { }\n}\nclass TestClass {\n    use ChildTrait;\n}\n$obj = new TestClass();\nvar_dump(get_class_methods($obj));\n?>")).toMatchSnapshot();
  });
});
