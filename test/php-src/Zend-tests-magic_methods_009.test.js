// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_009.phpt
  it("Testing __callstatic declaration with wrong modifier", function () {
    expect(parser.parseCode("<?php\nclass a {\n    static protected function __callstatic($a, $b) {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
