// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_ref_to_overloaded_prop.phpt
  it("Cannot assign by reference to overloaded object, even if __get() returns by-ref", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    private $x;\n    public function &__get($name) {\n        return $this->x;\n    }\n}\n$test = new Test;\n$y = 5;\n$test->x =& $y;\nvar_dump($test->x);\n?>")).toMatchSnapshot();
  });
});
