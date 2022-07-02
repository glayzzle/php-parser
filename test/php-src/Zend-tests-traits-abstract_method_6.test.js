// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/abstract_method_6.phpt
  it("Abstract private trait method not implemented", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    abstract private function method(int $a, string $b);\n}\nabstract class C {\n    use T;\n}\nclass D extends C {\n    private function method(int $a, string $b) {}\n}\n?>")).toMatchSnapshot();
  });
});
