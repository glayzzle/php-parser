// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_during_variance_autoload_2.phpt
  it("Exception during delayed variance autoload (variation 2)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function() {\n    class Y {}\n    throw new Exception;\n});\nclass A {\n    function method(): object {}\n}\nclass B extends A {\n    function method(): Y {}\n}\n?>")).toMatchSnapshot();
  });
});
