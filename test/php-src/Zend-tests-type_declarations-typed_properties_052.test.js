// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_052.phpt
  it("Class properties declared in eval() must not leak", function () {
    expect(parser.parseCode("<?php\neval(<<<'EOF'\nclass A {\n    public A      $a1;\n    public \\B     $b1;\n    public Foo\\C  $c1;\n    public ?A     $a2;\n    public ?\\B    $b2;\n    public ?Foo\\C $c2;\n}\nEOF\n);\n$obj = new A;\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
