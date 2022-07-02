// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_073.phpt
  it("Typed property must cast when used with &__get()", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop = \"42\";\n    public int $val;\n    public function &__get($name) {\n        return $this->prop;\n    }\n}\n$test = new Test;\nunset($test->val);\nvar_dump($test);\nvar_dump($val = &$test->val);\nvar_dump($test);\n$test->prop = \"x\";\nvar_dump($test, $val);\n?>")).toMatchSnapshot();
  });
});
