// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/enum-attributes.phpt
  it("Enum attributes", function () {
    expect(parser.parseCode("<?php\n#[Attribute]\nclass EnumAttribute {\n    public function __construct(\n        public string $value,\n    ) {}\n}\n#[EnumAttribute('Foo')]\nenum Foo {}\nvar_dump((new \\ReflectionClass(Foo::class))->getAttributes(EnumAttribute::class)[0]->newInstance());\n?>")).toMatchSnapshot();
  });
});
