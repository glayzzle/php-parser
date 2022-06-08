// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/variance/valid.phpt
  it("Valid union type variance", function () {
    expect(parser.parseCode("<?php\nclass X {}\nclass Y extends X {}\nclass A {\n    public X|Y $prop;\n    public iterable $prop2;\n    public function method(int $a): int|float {}\n    public function method2(B|string $a): A|string {}\n    public function method3(Y|B $a): X|A {}\n    public function method4(Traversable|X $a): iterable|X {}\n}\nclass B extends A {\n    public X $prop;\n    public array|Traversable $prop2;\n    public function method(int|float $a): int {}\n    public function method2(A|string $a): B|string {}\n    public function method3(A|X $a): B|Y {}\n    public function method4(iterable|X $a): Traversable|X {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
