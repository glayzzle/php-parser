// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_outside_namespace.phpt
  it("Function declaration should not be allowed before namespace declaration", function () {
    expect(parser.parseCode("<?php\nfunction foo() {}\nnamespace Bar;\n?>")).toMatchSnapshot();
  });
});
