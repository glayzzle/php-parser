// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_101.phpt
  it("Dumping of uninitialized typed properties (including private ones)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public bool $public;\n    protected float $protected;\n    private string $private;\n    public function dump() {\n        var_dump($this);\n        debug_zval_dump($this);\n    }\n}\n$test = new Test;\n$test->dump();\n?>")).toMatchSnapshot();
  });
});
