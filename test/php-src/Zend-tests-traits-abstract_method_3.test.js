// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/abstract_method_3.phpt
  it("Private abstract method from trait enforced in class", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    abstract private function neededByTheTrait(int $a, string $b);\n}\nclass C {\n    use T;\n    private function neededByTheTrait(array $a, object $b) {}\n}\n?>")).toMatchSnapshot();
  });
});
