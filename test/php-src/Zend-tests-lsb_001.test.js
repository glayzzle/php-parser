// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_001.phpt
  it("ZE2 Late Static Binding in a static function", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    protected static $staticVar = 'TestClassStatic';\n    const CLASS_CONST = 'TestClassConst';\n    protected static function staticFunction() {\n        return 'TestClassFunction';\n    }\n    public static function testStaticVar() {\n        return static::$staticVar;\n    }\n    public static function testClassConst() {\n        return static::CLASS_CONST;\n    }\n    public static function testStaticFunction() {\n        return static::staticFunction();\n    }\n}\nclass ChildClass1 extends TestClass {\n    protected static $staticVar = 'ChildClassStatic';\n    const CLASS_CONST = 'ChildClassConst';\n    protected static function staticFunction() {\n        return 'ChildClassFunction';\n    }\n}\nclass ChildClass2 extends TestClass {}\necho TestClass::testStaticVar() . \"\\n\";\necho TestClass::testClassConst() . \"\\n\";\necho TestClass::testStaticFunction() . \"\\n\";\necho ChildClass1::testStaticVar() . \"\\n\";\necho ChildClass1::testClassConst() . \"\\n\";\necho ChildClass1::testStaticFunction() . \"\\n\";\necho ChildClass2::testStaticVar() . \"\\n\";\necho ChildClass2::testClassConst() . \"\\n\";\necho ChildClass2::testStaticFunction() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
