// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug31651.phpt
  it("Reflection Bug #31651 (ReflectionClass::getDefaultProperties segfaults with arrays.)", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    public $a = array('a' => 1);\n}\n$ref = new ReflectionClass('Test');\nprint_r($ref->getDefaultProperties());\n?>")).toMatchSnapshot();
  });
});
