// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_048.phpt
  it("Parent private property types must be ignored", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $prop = \"1\";\n}\nclass B extends A {\n    private int $prop = 2;\n}\nvar_dump((function () { return $this->prop; })->call(new B));\n?>")).toMatchSnapshot();
  });
});
