// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_007.phpt
  it("Testing __set() declaration in abstract class with wrong modifier", function () {
    expect(parser.parseCode("<?php\nabstract class b {\n    abstract protected function __set($a);\n}\n?>")).toMatchSnapshot();
  });
});
