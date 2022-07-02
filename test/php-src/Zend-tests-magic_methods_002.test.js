// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_002.phpt
  it("Testing __unset with private visibility", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    private function __unset($a) {\n        print \"unset\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
