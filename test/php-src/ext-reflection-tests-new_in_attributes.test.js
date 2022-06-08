// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/new_in_attributes.phpt
  it("new in attribute arguments", function () {
    expect(parser.parseCode("<?php\n#[Attribute]\nclass MyAttribute {\n    public function __construct(public $x, public $y) {}\n}\n#[MyAttribute(null, new stdClass)]\nclass Test1 {\n}\n$rc = new ReflectionClass(Test1::class);\n$ra = $rc->getAttributes()[0];\n$args1 = $ra->getArguments();\n$obj1 = $ra->newInstance();\nvar_dump($args1, $obj1);\n// Check that we get fresh instances each time:\n$args2 = $ra->getArguments();\n$obj2 = $ra->newInstance();\nvar_dump($args1[1] !== $args2[1]);\nvar_dump($obj1->y !== $obj2->y);\n// Check that named args work:\n#[MyAttribute(y: new stdClass, x: null)]\nclass Test2 {\n}\n$rc = new ReflectionClass(Test2::class);\n$ra = $rc->getAttributes()[0];\n$args = $ra->getArguments();\n$obj = $ra->newInstance();\nvar_dump($args, $obj);\n?>")).toMatchSnapshot();
  });
});
