// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/abstract_method_5.phpt
  it("Staticness enforcement on abstract trait methods", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    abstract static public function method(int $a, string $b);\n}\nclass C {\n    use T;\n    public function method(int $a, string $b) {}\n}\n?>")).toMatchSnapshot();
  });
});
