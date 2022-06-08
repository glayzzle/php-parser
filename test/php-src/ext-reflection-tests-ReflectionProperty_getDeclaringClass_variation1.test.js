// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_getDeclaringClass_variation1.phpt
  it("Test ReflectionProperty::getDeclaringClass() with inherited properties.", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $prop;\n}\nclass B extends A {\n}\n$propInfo = new ReflectionProperty('B', 'prop');\nvar_dump($propInfo->getDeclaringClass());\n?>")).toMatchSnapshot();
  });
});
