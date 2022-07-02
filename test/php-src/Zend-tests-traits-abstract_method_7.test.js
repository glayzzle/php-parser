// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/abstract_method_7.phpt
  it("Abstract private trait method forwarded as abstract protected method", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    abstract private function method(int $a, string $b);\n}\nabstract class C {\n    use T;\n    abstract protected function method(int $a, string $b);\n}\nclass D extends C {\n    protected function method(int $a, string $b) {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
