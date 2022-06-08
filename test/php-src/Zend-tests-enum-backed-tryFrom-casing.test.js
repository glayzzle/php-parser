// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-tryFrom-casing.phpt
  it("BackedEnum::tryFrom() casing in reflection", function () {
    expect(parser.parseCode("<?php\nenum Foo: string {}\n$reflectionEnum = new ReflectionEnum(Foo::class);\n$reflectionMethod = $reflectionEnum->getMethod('tryFrom');\necho $reflectionMethod->getName() . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
