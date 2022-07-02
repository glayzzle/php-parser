// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_003.phpt
  it("ZE2 Late Static Binding creating a new class with 'static'", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    public static function createInstance() {\n        return new static();\n    }\n}\nclass ChildClass extends TestClass {}\n$testClass = TestClass::createInstance();\n$childClass = ChildClass::createInstance();\necho get_class($testClass) . \"\\n\";\necho get_class($childClass) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
