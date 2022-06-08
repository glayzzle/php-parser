// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_hasDefaultValue.phpt
  it("reflection: ReflectionProperty::hasDefaultValue", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    public $foo;\n    public $bar = 'baz';\n    public static $static1;\n    public static $static2 = 1234;\n    public int $val1;\n    public int $val2 = 1234;\n    public ?int $nullable;\n    public ?int $nullable2 = null;\n}\n$property = new ReflectionProperty(TestClass::class, 'foo');\nvar_dump($property->hasDefaultValue());\n$property = new ReflectionProperty(TestClass::class, 'bar');\nvar_dump($property->hasDefaultValue());\n$property = new ReflectionProperty(TestClass::class, 'static1');\nvar_dump($property->hasDefaultValue());\n$property = new ReflectionProperty(TestClass::class, 'static2');\nvar_dump($property->hasDefaultValue());\n$property = new ReflectionProperty(TestClass::class, 'val1');\nvar_dump($property->hasDefaultValue());\n$property = new ReflectionProperty(TestClass::class, 'val2');\nvar_dump($property->hasDefaultValue());\n$property = new ReflectionProperty(TestClass::class, 'nullable');\nvar_dump($property->hasDefaultValue());\n$property = new ReflectionProperty(TestClass::class, 'nullable2');\nvar_dump($property->hasDefaultValue());\n$test = new TestClass;\n$test->dynamic = null;\n$property = new ReflectionProperty($test, 'dynamic');\nvar_dump($property->hasDefaultValue());\n?>")).toMatchSnapshot();
  });
});
