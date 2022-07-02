// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_reference_coercion_leak.phpt
  it("Do not leak when assigning to reference set with multiple typed properties with type coercion", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public string $x;\n    public string $y;\n}\n$test = new Test;\n$ref = \"\";\n$test->x =& $ref;\n$test->y =& $ref;\n$val = 42;\n$ref = $val;\nvar_dump($ref, $val);\n?>")).toMatchSnapshot();
  });
});
