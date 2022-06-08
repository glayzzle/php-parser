// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_010.phpt
  it("First Class Callable preserve Called Scope", function () {
    expect(parser.parseCode("<?php\nclass Foo { \n    public static function method() { \n        return static::class;\n    }\n}\nclass Bar extends Foo {}\n$bar = Bar::method(...);\necho $bar();\n?>")).toMatchSnapshot();
  });
});
