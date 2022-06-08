// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_032.phpt
  it("Test typed properties return by ref is allowed", function () {
    expect(parser.parseCode("<?php\n$foo = new class {\n    public int $bar = 15;\n    public function &method() {\n        return $this->bar;\n    }\n};\nvar_dump($foo->method());\n?>")).toMatchSnapshot();
  });
});
