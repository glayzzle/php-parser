// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_010.phpt
  it("Testing __toString() declaration with wrong modifier", function () {
    expect(parser.parseCode("<?php\nclass a {\n    static protected function __toString($a, $b) {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
