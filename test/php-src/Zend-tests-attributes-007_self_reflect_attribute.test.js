// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/007_self_reflect_attribute.phpt
  it("Attributes: attributes on Attribute return itself", function () {
    expect(parser.parseCode("<?php\n$reflection = new \\ReflectionClass(Attribute::class);\n$attributes = $reflection->getAttributes();\nforeach ($attributes as $attribute) {\n    var_dump($attribute->getName());\n    var_dump($attribute->getArguments());\n    $a = $attribute->newInstance();\n    var_dump(get_class($a));\n    var_dump($a->flags == Attribute::TARGET_CLASS);\n}\n?>")).toMatchSnapshot();
  });
});
