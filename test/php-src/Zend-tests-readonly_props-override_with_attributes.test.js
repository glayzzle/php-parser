// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/override_with_attributes.phpt
  it("Can override readonly property with attributes", function () {
    expect(parser.parseCode("<?php\n#[Attribute]\nclass FooAttribute {}\nclass A {\n    public readonly int $prop;\n    public function __construct() {\n        $this->prop = 42;\n    }\n}\nclass B extends A {\n    #[FooAttribute]\n    public readonly int $prop;\n}\nvar_dump((new ReflectionProperty(B::class, 'prop'))->getAttributes()[0]->newInstance());\n?>")).toMatchSnapshot();
  });
});
