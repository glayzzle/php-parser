// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/044.phpt
  it("__set_state can only declare object as return", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static function __set_state($properties): bool {}\n}\n?>")).toMatchSnapshot();
  });
});
