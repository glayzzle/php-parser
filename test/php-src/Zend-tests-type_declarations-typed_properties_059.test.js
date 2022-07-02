// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_059.phpt
  it("Nullable typed properties in traits", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public int $a1;\n    public ?int $b1;\n}\nclass A {\n    use T;\n    public int $a2;\n    public ?int $b2;\n}\n$x = new A;\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
