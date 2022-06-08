// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/callable_002.phpt
  it("callable type#002 - Reflection", function () {
    expect(parser.parseCode("<?php\nclass bar {\n    static function foo(callable $arg) {}\n}\nfunction foo(callable $bar) {\n}\n$closure = function (callable $arg) {};\n$rf = new ReflectionFunction(\"foo\");\nvar_dump($rf->getParameters()[0]->isCallable());\n$rm = new ReflectionMethod(\"bar\", \"foo\");\nvar_dump($rm->getParameters()[0]->isCallable());\n$rc = new ReflectionFunction($closure);\nvar_dump($rc->getParameters()[0]->isCallable());\n?>")).toMatchSnapshot();
  });
});
