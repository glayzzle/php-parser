// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_call.phpt
  it("Closure::call", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $x = 0;\n    function bar() {\n        return function () {\n            return $this->x;\n        };\n    }\n}\n$foo = new Foo;\n$qux = $foo->bar();\n$foobar = new Foo;\n$foobar->x = 3;\nvar_dump($qux());\nvar_dump($qux->call($foo));\n// Try on an object other than the one already bound\nvar_dump($qux->call($foobar));\n$bar = function () {\n    return $this->x;\n};\n$elePHPant = new StdClass;\n$elePHPant->x = 7;\n// Try on a StdClass\nvar_dump($bar->call($elePHPant));\n$beta = function ($z) {\n    return $this->x * $z;\n};\n// Ensure argument passing works\nvar_dump($beta->call($foobar, 7));\n// Ensure ->call calls with scope of passed object\nclass FooBar {\n    private $x = 3;\n}\n$foo = function () {\n    var_dump($this->x);\n};\n$foo->call(new FooBar);\n?>")).toMatchSnapshot();
  });
});
