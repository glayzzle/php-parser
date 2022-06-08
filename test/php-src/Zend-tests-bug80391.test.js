// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80391.phpt
  it("Iterable not covariant to mixed", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function method1(): mixed {}\n    public function method2(): array|object {}\n    public function method3(iterable $x) {}\n    public function method4(iterable $x) {}\n}\nclass B extends A {\n    public function method1(): iterable {}\n    public function method2(): iterable {}\n    public function method3(mixed $x) {}\n    public function method4(array|object $x) {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
