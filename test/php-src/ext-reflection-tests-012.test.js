// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/012.phpt
  it("ReflectionClass::getDefaultProperties()", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $test = \"ok\";\n}\n$class = new ReflectionClass(\"Foo\");\n$props = $class->getDefaultProperties();\necho $props[\"test\"];\n?>")).toMatchSnapshot();
  });
});
