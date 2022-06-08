// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_003.phpt
  it("Test typed properties error condition (fetch uninitialized by reference)", function () {
    expect(parser.parseCode("<?php\n$thing = new class() {\n    public int $int;\n};\n$var = &$thing->int;\n?>")).toMatchSnapshot();
  });
});
