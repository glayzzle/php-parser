// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/034.phpt
  it("__isset can only declare a boolean return type", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __isset($name) : \\stdClass|bool {}\n}\n?>")).toMatchSnapshot();
  });
});
