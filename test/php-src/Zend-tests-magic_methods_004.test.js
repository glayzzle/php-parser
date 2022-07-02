// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_004.phpt
  it("Testing __unset() with protected visibility", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    protected function __unset($a) {\n        print \"unset\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
