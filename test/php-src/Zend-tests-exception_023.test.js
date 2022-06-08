// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_023.phpt
  it("Ensure proper backtraces with anon classes", function () {
    expect(parser.parseCode("<?php\n(function($obj) {\n    throw new Exception();\n})(new class {});\n?>")).toMatchSnapshot();
  });
});
