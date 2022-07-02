// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/case-attributes.phpt
  it("Enum case attributes", function () {
    expect(parser.parseCode("<?php\n#[Attribute(Attribute::TARGET_CLASS_CONSTANT)]\nclass EnumCaseAttribute {\n    public function __construct(\n        public string $value,\n    ) {}\n}\nenum Foo {\n    #[EnumCaseAttribute('Bar')]\n    case Bar;\n}\nvar_dump((new \\ReflectionClassConstant(Foo::class, 'Bar'))->getAttributes(EnumCaseAttribute::class)[0]->newInstance());\n?>")).toMatchSnapshot();
  });
});
