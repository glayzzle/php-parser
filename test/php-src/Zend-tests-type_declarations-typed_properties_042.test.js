// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_042.phpt
  it("Proper source duplication on assignment to typed property", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar;\n}\n$foo = new Foo();\nfor ($i = 0; $i < 5; $i++) {\n    $foo->bar = \"5\";\n    var_dump($foo->bar);\n}\n?>")).toMatchSnapshot();
  });
});
