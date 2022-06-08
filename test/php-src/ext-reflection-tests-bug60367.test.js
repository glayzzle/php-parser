// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug60367.phpt
  it("Bug #60367 (Reflection and Late Static Binding)", function () {
    expect(parser.parseCode("<?php\nabstract class A {\n    const WHAT = 'A';\n    public static function call() {\n        echo static::WHAT;\n    }\n}\nclass B extends A {\n    const WHAT = 'B';\n}\n$method = new ReflectionMethod(\"b::call\");\n$method->invoke(null);\n$method->invokeArgs(null, array());\n$method = new ReflectionMethod(\"A::call\");\n$method->invoke(null);\n$method->invokeArgs(null, array());\n?>")).toMatchSnapshot();
  });
});
