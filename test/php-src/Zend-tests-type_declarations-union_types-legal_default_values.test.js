// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/legal_default_values.phpt
  it("The default value must be legal for one of the type in the union", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int|float $a = 1;\n    public int|float $b = 2.0;\n    public float|string $c = 3; // Strict typing exception\n    public float|string $d = 4.0;\n    public float|string $e = \"5\";\n}\nfunction test(\n    int|float $a = 1,\n    int|float $b = 2.0,\n    float|string $c = 3, // Strict typing exception\n    float|string $d = 4.0,\n    float|string $e = \"5\"\n) {\n    var_dump($a, $b, $c, $d, $e);\n}\nvar_dump(new Test);\ntest();\n?>")).toMatchSnapshot();
  });
});
