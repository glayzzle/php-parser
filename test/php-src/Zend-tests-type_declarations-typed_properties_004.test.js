// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_004.phpt
  it("Test typed properties error condition (type mismatch)", function () {
    expect(parser.parseCode("<?php\nnew class(\"PHP 7 is better than you, and it knows it ...\") {\n    public int $int;\n    public function __construct(string $string) {\n        $this->int = $string;\n    }\n};\n?>")).toMatchSnapshot();
  });
});
