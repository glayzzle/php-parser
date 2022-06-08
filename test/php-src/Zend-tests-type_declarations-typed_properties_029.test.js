// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_029.phpt
  it("Test typed properties respect strict types (on)", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nclass Foo {\n    public int $bar;\n}\n$foo = new Foo;\n$foo->bar = \"1\";\n?>")).toMatchSnapshot();
  });
});
