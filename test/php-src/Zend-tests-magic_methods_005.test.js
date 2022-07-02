// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_005.phpt
  it("Testing __call() declaration in interface with wrong modifier", function () {
    expect(parser.parseCode("<?php\ninterface a {\n    static function __call($a, $b);\n}\n?>")).toMatchSnapshot();
  });
});
