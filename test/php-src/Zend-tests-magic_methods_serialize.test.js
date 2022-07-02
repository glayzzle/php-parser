// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_serialize.phpt
  it("__serialize declaration", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    static function __serialize($arguments) {}\n}\n?>")).toMatchSnapshot();
  });
});
