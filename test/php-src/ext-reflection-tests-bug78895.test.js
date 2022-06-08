// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug78895.phpt
  it("Fixed bug #78895 (Reflection detects abstract non-static class as abstract static).", function () {
    expect(parser.parseCode("<?php\nabstract class Foo {\n    abstract public function f1();\n}\ninterface I {\n    public function f2();\n}\ntrait T {\n    abstract public function f2();\n}\nclass Bar extends Foo implements I {\n    use T;\n    function f1() {}\n    function f2() {}\n}\n$ref = new ReflectionClass(Foo::class);\nvar_dump(Reflection::getModifierNames($ref->getModifiers()));\n$ref = new ReflectionClass(I::class);\nvar_dump(Reflection::getModifierNames($ref->getModifiers()));\n$ref = new ReflectionClass(T::class);\nvar_dump(Reflection::getModifierNames($ref->getModifiers()));\n$ref = new ReflectionClass(Bar::class);\nvar_dump(Reflection::getModifierNames($ref->getModifiers()));\n?>")).toMatchSnapshot();
  });
});
