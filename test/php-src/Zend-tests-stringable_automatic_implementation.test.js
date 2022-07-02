// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/stringable_automatic_implementation.phpt
  it("Stringable is automatically implemented", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __toString() {\n        return \"foo\";\n    }\n}\nvar_dump(new Test instanceof Stringable);\nvar_dump((new ReflectionClass(Test::class))->getInterfaceNames());\nclass Test2 extends Test {\n    public function __toString() {\n        return \"bar\";\n    }\n}\nvar_dump(new Test2 instanceof Stringable);\nvar_dump((new ReflectionClass(Test2::class))->getInterfaceNames());\n?>")).toMatchSnapshot();
  });
});
