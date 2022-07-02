// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug66811.phpt
  it("Bug #66811: Cannot access static::class in lambda, written outside of a class", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function f() {\n        return function () {\n            var_dump(self::class);\n            var_dump(static::class);\n        };\n    }\n}\nclass B extends A {}\n$f = B::f();\n$f();\n$g = $f->bindTo(null, A::class);\n$g();\n$foo = function () {\n    var_dump(self::class);\n    var_dump(static::class);\n};\n$bar = $foo->bindTo(null, A::class);\n$bar();\n?>")).toMatchSnapshot();
  });
});
