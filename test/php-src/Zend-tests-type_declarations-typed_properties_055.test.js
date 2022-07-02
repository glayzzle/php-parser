// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_055.phpt
  it("Test assign to typed property taken by reference", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $foo = 1;\n    public int $bar = 2;\n}\nclass B {\n    public A $a;\n}\n$f = function (&$n) {\n    var_dump($n);\n    $n = \"ops\";\n};\n$o = new B;\n$o->a = new A;\n$f($o->a->foo);\n$f($o->a->bar);\n?>")).toMatchSnapshot();
  });
});
