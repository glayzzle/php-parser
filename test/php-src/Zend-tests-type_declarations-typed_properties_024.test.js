// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_024.phpt
  it("Test typed properties ignore private props during inheritance", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    private int $thing;\n}\nclass Bar extends Foo {\n    public string $thing; // No conflict\n}\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
