// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_unserialize.phpt
  it("__unserialize declaration", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    static function __unserialize($data, $value) {}\n}\n?>")).toMatchSnapshot();
  });
});
