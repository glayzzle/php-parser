// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_005.phpt
  it("First Class Callable from Magic", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __call($method, $args) {\n        return $method;\n    }\n    public static function __callStatic($method, $args) {\n        return static::class . \"::\" . $method;\n    }\n}\nclass Bar extends Foo {}\n$foo = new Foo;\n$bar = $foo->anythingInstance(...);\necho $bar(), \"\\n\";\n$qux = Foo::anythingStatic(...);\necho $qux(), \"\\n\";\n$qux2 = Bar::anythingStatic(...);\necho $qux2(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
