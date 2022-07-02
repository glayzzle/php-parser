// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_012.phpt
  it("Test typed properties allow fetch reference for foreach", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar = 1;\n}\n$foo = new Foo();\nforeach ($foo as &$prop) {\n    $prop++;\n}\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
