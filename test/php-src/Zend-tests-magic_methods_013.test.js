// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_013.phpt
  it("__isset first parameter should be a string when typed", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __isset(\\stdClass $name) {}\n}\n?>")).toMatchSnapshot();
  });
});
