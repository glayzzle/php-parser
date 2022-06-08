// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/018.phpt
  it("Destructors cannot declare a return type", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __destruct() : Foo {}\n}\n?>")).toMatchSnapshot();
  });
});
