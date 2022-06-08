// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_005.phpt
  it("Test typed properties error condition (type mismatch object)", function () {
    expect(parser.parseCode("<?php\nclass Dummy {}\nnew class(new Dummy) {\n    public stdClass $std;\n    public function __construct(Dummy $dummy) {\n        $this->std = $dummy;\n    }\n};\n?>")).toMatchSnapshot();
  });
});
