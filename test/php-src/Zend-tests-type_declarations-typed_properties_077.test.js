// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_077.phpt
  it("Converted values shall be returned and not the original value upon property assignment", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $i;\n    public string $s;\n}\n$test = new Test;\nvar_dump($test->i = \"42\");\nvar_dump($test->s = 42);\n?>")).toMatchSnapshot();
  });
});
