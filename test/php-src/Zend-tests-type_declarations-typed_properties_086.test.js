// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_086.phpt
  it("Test typed properties with integer keys", function () {
    expect(parser.parseCode("<?php\nclass T {\n    // Class must have at least one property. Property must have a type.\n    // Empty class or untyped property removes segfault\n    public int $i;\n}\n$t = new T;\n// $x must be undefined or a non-string type\n$x = 1;\n$t->$x = 2;\n$t->$x--;\nvar_dump($t);\n?>")).toMatchSnapshot();
  });
});
