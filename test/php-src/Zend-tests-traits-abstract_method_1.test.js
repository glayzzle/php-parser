// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/abstract_method_1.phpt
  it("Abstract method from trait enforced in class", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    abstract public function neededByTheTrait(int $a, string $b);\n}\nclass C {\n    use T;\n    public function neededByTheTrait(array $a, object $b) {}\n}\n?>")).toMatchSnapshot();
  });
});
