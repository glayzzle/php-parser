// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71428.1.phpt
  it("bug #71428.1: inheritance with null default values", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function m(array $a = null) {}\n}\nclass B extends A {\n    public function m(array $a = []) {}\n}\n?>")).toMatchSnapshot();
  });
});
