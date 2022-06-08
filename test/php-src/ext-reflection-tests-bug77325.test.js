// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug77325.phpt
  it("Bug #77325: ReflectionClassConstant::$class returns wrong class when extending", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    const FOO = 'foo';\n}\nclass Bar extends Foo {\n}\n$barClassReflection = new ReflectionClass(Bar::class);\n$constants = $barClassReflection->getReflectionConstants();\nforeach ($constants as $constant) {\n    var_dump($constant->class);\n    var_dump($constant->getDeclaringClass()->getName());\n}\n$constant = new ReflectionClassConstant(Bar::class, 'FOO');\nvar_dump($constant->class);\nvar_dump($constant->getDeclaringClass()->getName());\n?>")).toMatchSnapshot();
  });
});
