// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/027_trailing_comma_args.phpt
  it("Trailing comma in attribute argument list", function () {
    expect(parser.parseCode("<?php\n#[MyAttribute(\n    \"there\",\n    \"are\",\n    \"many\",\n    \"arguments\",\n)]\nclass Foo { }\n$ref = new \\ReflectionClass(Foo::class);\n$attr = $ref->getAttributes()[0];\nvar_dump($attr->getName(), $attr->getArguments());\n?>")).toMatchSnapshot();
  });
});
