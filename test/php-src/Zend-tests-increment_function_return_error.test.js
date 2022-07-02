// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/increment_function_return_error.phpt
  it("It's not possible to increment the return value of a function", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    return 42;\n}\n++test();\n?>")).toMatchSnapshot();
  });
});
