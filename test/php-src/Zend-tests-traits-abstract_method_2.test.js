// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/abstract_method_2.phpt
  it("Mutually incompatible methods from traits are fine as long as the final method is compatible", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n    abstract public function test();\n}\ntrait T2 {\n    abstract public function test(): int;\n}\nclass C {\n    use T1, T2;\n    public function test(): int {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
