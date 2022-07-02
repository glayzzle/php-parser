// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_035.phpt
  it("Test typed properties inheritance must not change type", function () {
    expect(parser.parseCode("<?php\nclass Foo{\n    public $bar = 42;\n}\nclass Baz extends Foo{\n    public int $bar = 33;\n}\n?>")).toMatchSnapshot();
  });
});
