// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_010.phpt
  it("Test typed properties allow fetch reference", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar = 1;\n}\n$cb = function(int &$bar) {\n    var_dump($bar);\n};\n$foo = new Foo();\n$cb($foo->bar);\n?>")).toMatchSnapshot();
  });
});
