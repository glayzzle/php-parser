// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug71018.phpt
  it("Bug #71018 (ReflectionProperty::setValue() behavior changed)", function () {
    expect(parser.parseCode("<?php\nclass T1 {\n    public static $data;\n    public static function getDataBySelf()\n    {\n        return self::$data;\n    }\n    public static function getDataByStatic()\n    {\n        return static::$data;\n    }\n}\nclass T2 extends T1 {}\n$Prop1 = new ReflectionProperty(T1::class, 'data');\n$Prop2 = new ReflectionProperty(T2::class, 'data');\n// #1\n// prints: hello, hello in PHP5, but world, hello in PHP7 - not OK\n$Prop1->setValue(\\T1::class, \"world\");\n$Prop2->setValue(\\T2::class, 'hello');\nvar_dump(\"T2::self = \" . T2::getDataBySelf());\nvar_dump(\"T2::static = \" . T2::getDataByStatic());\n// #2\n// prints: hello, hello in both PHP5 and PHP7 - OK\nT1::$data = \"world\";\nT2::$data = 'hello';\nvar_dump(\"T2::self = \" . T2::getDataBySelf());\nvar_dump(\"T2::static = \" . T2::getDataByStatic());\n?>")).toMatchSnapshot();
  });
});
