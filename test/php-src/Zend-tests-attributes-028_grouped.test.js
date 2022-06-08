// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/028_grouped.phpt
  it("Attributes can be grouped", function () {
    expect(parser.parseCode("<?php\n#[A1(1), A1(2), A2(3)]\nclass Foo\n{\n}\n#[\n    A1(1),\n    A1(2),\n    A2(3)\n]\nfunction foo() {}\n#[A1, A1, A2]\nfunction bar() {}\n$sources = [\n    new \\ReflectionClass(Foo::class),\n    new \\ReflectionFunction('foo'),\n    new \\ReflectionFunction('bar'),\n];\nforeach ($sources as $ref) {\n    $attr = $ref->getAttributes();\n    var_dump(get_class($ref), count($attr));\n    foreach ($attr as $a) {\n        printf(\"%s(%s)\\n\", $a->getName(), implode(\", \", $a->getArguments()));\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
