// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_008.phpt
  it("Testing __set implementation with wrong declaration", function () {
    expect(parser.parseCode("<?php\nabstract class b {\n    abstract function __set($a, $b);\n}\nclass a extends b {\n    private function __set($a, $b) {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
