// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_072.phpt
  it("Typed property must cast when used with __get()", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $val;\n    public function __get($name) {\n        return \"42\";\n    }\n}\n$test = new Test;\nunset($test->val);\nvar_dump($test);\nvar_dump($test->val);\n?>")).toMatchSnapshot();
  });
});
