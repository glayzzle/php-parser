// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_016.phpt
  it("Test typed properties initial values", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $int = 1;\n    public float $flt = 2.2;\n    public float $flt2 = 2;\n    public array $arr = [];\n    public bool $bool = false;\n    public iterable $iter = [];\n}\nvar_dump(new Foo);\n?>")).toMatchSnapshot();
  });
});
