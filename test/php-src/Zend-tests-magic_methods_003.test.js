// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_003.phpt
  it("Testing __unset declaring as static", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    static function __unset($a) {\n        print \"unset\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
