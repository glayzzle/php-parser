// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_028.phpt
  it("Test typed properties respect strict types (off)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar;\n}\n$foo = new Foo;\n$foo->bar = \"1\";\nvar_dump($foo->bar);\n?>")).toMatchSnapshot();
  });
});
