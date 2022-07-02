// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_054.phpt
  it("Typed properties disallow callable (nullable variant)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public ?callable $a;\n}\n$obj = new A;\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
