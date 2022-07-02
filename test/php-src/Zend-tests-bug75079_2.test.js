// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75079_2.phpt
  it("Bug #75079 variation without traits", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    private static $bar = 123;\n    static function test(){\n        return function(){\n            return function(){\n                return Foo::$bar;\n            };\n        };\n    }\n}\n$f = Foo::test();\nvar_dump($f()());\nclass A{}\n$a = new A;\nvar_dump($f->bindTo($a, A::CLASS)()());\n?>")).toMatchSnapshot();
  });
});
