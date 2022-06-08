// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/030_strict_types.phpt
  it("strict_types=1 of the attribute use-site is respected", function () {
    expect(parser.parseCode("<?php\n#[Attribute]\nclass MyAttribute {\n    public function __construct(public int $value) {}\n}\n#[MyAttribute(\"42\")]\nclass TestWeak {}\nrequire __DIR__ . '/030_strict_types.inc';\nvar_dump((new ReflectionClass(TestWeak::class))->getAttributes()[0]->newInstance());\nvar_dump((new ReflectionClass(TestStrict::class))->getAttributes()[0]->newInstance());\n?>")).toMatchSnapshot();
  });
});
