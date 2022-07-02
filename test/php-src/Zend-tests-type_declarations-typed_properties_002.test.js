// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_002.phpt
  it("Test typed properties error condition (read uninitialized)", function () {
    expect(parser.parseCode("<?php\n$thing = new class() {\n    public int $int;\n};\nvar_dump($thing->int);\n?>")).toMatchSnapshot();
  });
});
