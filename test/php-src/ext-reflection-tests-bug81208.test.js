// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug81208.phpt
  it("Bug #81208: Segmentation fault while create newInstance from attribute", function () {
    expect(parser.parseCode("<?php\n#[Attribute(Attribute::TARGET_PROPERTY)]\nclass MyAnnotation\n{\n    public function __construct(public bool $nullable = false) {}\n}\nclass MyClass {\n    #[MyAnnotation(name: \"my_name\", type: \"integer\", nullable: asdasdasd)]\n    public $property;\n}\n$z = new ReflectionClass(MyClass::class);\nforeach ($z->getProperty(\"property\")->getAttributes() as $attribute) {\n    try {\n        $attribute->newInstance();\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
