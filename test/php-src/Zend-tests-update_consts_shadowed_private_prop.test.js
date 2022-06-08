// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/update_consts_shadowed_private_prop.phpt
  it("Constant updating for shadowed private property", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    private $prop = X;\n    function test() {\n        var_dump($this->prop);\n    }\n}\nclass Bar extends Foo {\n    protected $prop;\n}\ndefine('X', 1);\n$bar = new Bar;\n$bar->test();\n?>")).toMatchSnapshot();
  });
});
