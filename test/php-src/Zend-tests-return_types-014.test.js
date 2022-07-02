// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/014.phpt
  it("Constructors cannot declare a return type", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __construct() : Foo {}\n}\n?>")).toMatchSnapshot();
  });
});
