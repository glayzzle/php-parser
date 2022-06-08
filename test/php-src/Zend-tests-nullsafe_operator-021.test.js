// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/021.phpt
  it("Test nullsafe in list assign", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $bar;\n}\nclass Bar {\n    public $baz;\n}\n$foo = new Foo();\n$foo->bar = new Bar();\n[$foo?->bar->baz] = ['bar'];\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
