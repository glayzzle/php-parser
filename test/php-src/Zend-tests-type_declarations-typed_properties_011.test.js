// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_011.phpt
  it("Test typed properties allow fetch reference for init array", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar = 1;\n}\n$foo = new Foo();\n$array = [&$foo->bar];\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
