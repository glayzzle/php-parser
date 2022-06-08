// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_002.phpt
  it("ZE2 Late Static Binding in an instance function", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    protected static $staticVar = 'TestClassStatic';\n    const CLASS_CONST = 'TestClassConst';\n    protected static function staticFunction() {\n        return 'TestClassFunction';\n    }\n    public function testStaticVar() {\n        return static::$staticVar;\n    }\n    public function testClassConst() {\n        return static::CLASS_CONST;\n    }\n    public function testStaticFunction() {\n        return static::staticFunction();\n    }\n}\nclass ChildClass1 extends TestClass {\n    protected static $staticVar = 'ChildClassStatic';\n    const CLASS_CONST = 'ChildClassConst';\n    protected static function staticFunction() {\n        return 'ChildClassFunction';\n    }\n}\nclass ChildClass2 extends TestClass {}\n$testClass = new TestClass();\n$childClass1 = new ChildClass1();\n$childClass2 = new ChildClass2();\necho $testClass->testStaticVar() . \"\\n\";\necho $testClass->testClassConst() . \"\\n\";\necho $testClass->testStaticFunction() . \"\\n\";\necho $childClass1->testStaticVar() . \"\\n\";\necho $childClass1->testClassConst() . \"\\n\";\necho $childClass1->testStaticFunction() . \"\\n\";\necho $childClass2->testStaticVar() . \"\\n\";\necho $childClass2->testClassConst() . \"\\n\";\necho $childClass2->testStaticFunction() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
