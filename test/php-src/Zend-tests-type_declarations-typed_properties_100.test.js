// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_100.phpt
  it("Property type not enforced for __get if the property is not visible", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    private int $prop;\n    public function __get($name) {\n        return \"foobar\";\n    }\n}\n$test = new Test;\nvar_dump($test->prop);\n?>")).toMatchSnapshot();
  });
});
