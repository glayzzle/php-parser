// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/011_inheritance.phpt
  it("Attributes comply with inheritance rules.", function () {
    expect(parser.parseCode("<?php\n#[A2]\nclass C1\n{\n    #[A1]\n    public function foo() { }\n}\nclass C2 extends C1\n{\n    public function foo() { }\n}\nclass C3 extends C1\n{\n    #[A1]\n    public function bar() { }\n}\n$ref = new \\ReflectionClass(C1::class);\nprint_r(array_map(fn ($a) => $a->getName(), $ref->getAttributes()));\nprint_r(array_map(fn ($a) => $a->getName(), $ref->getMethod('foo')->getAttributes()));\n$ref = new \\ReflectionClass(C2::class);\nprint_r(array_map(fn ($a) => $a->getName(), $ref->getAttributes()));\nprint_r(array_map(fn ($a) => $a->getName(), $ref->getMethod('foo')->getAttributes()));\n$ref = new \\ReflectionClass(C3::class);\nprint_r(array_map(fn ($a) => $a->getName(), $ref->getAttributes()));\nprint_r(array_map(fn ($a) => $a->getName(), $ref->getMethod('foo')->getAttributes()));\necho \"\\n\";\ntrait T1\n{\n    #[A2]\n    public $a;\n}\nclass C4\n{\n    use T1;\n}\nclass C5\n{\n    use T1;\n    public $a;\n}\n$ref = new \\ReflectionClass(T1::class);\nprint_r(array_map(fn ($a) => $a->getName(), $ref->getProperty('a')->getAttributes()));\n$ref = new \\ReflectionClass(C4::class);\nprint_r(array_map(fn ($a) => $a->getName(), $ref->getProperty('a')->getAttributes()));\n$ref = new \\ReflectionClass(C5::class);\nprint_r(array_map(fn ($a) => $a->getName(), $ref->getProperty('a')->getAttributes()));\n?>")).toMatchSnapshot();
  });
});
