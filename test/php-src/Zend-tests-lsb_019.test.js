// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/lsb_019.phpt
  it("ZE2 Late Static Binding properties and methods declared as protected and overridden as public.", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n    protected static $staticVar;\n    protected static function staticFunction() {\n        return 'TestClassFunction';\n    }\n    public static function testStaticVar() {\n        TestClass::$staticVar = 'TestClassStatic';\n        ChildClass1::$staticVar = 'ChildClassStatic';\n        return static::$staticVar;\n    }\n    public static function testStaticFunction() {\n        return static::staticFunction();\n    }\n}\nclass ChildClass1 extends TestClass {\n    public static $staticVar;\n    public static function staticFunction() {\n        return 'ChildClassFunction';\n    }\n}\nclass ChildClass2 extends TestClass {}\necho TestClass::testStaticVar() . \"\\n\";\necho TestClass::testStaticFunction() . \"\\n\";\necho ChildClass1::testStaticVar() . \"\\n\";\necho ChildClass1::testStaticFunction() . \"\\n\";\necho ChildClass2::testStaticVar() . \"\\n\";\necho ChildClass2::testStaticFunction() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
