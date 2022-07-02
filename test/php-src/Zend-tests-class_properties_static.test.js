// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_properties_static.phpt
  it("Static Class Property Expressions", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $b1 = 1 + 1;\n    public $b2 = 1 << 2;\n    public $b3 = \"foo \" . \" bar \" . \" baz\";\n}\n$f = new Foo;\nvar_dump(\n    $f->b1,\n    $f->b2,\n    $f->b3\n);\n?>")).toMatchSnapshot();
  });
});
