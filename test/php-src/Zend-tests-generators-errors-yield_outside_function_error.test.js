// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/yield_outside_function_error.phpt
  it("Yield cannot be used outside of functions", function () {
    expect(parser.parseCode("<?php\nyield \"Test\";\n?>")).toMatchSnapshot();
  });
});
