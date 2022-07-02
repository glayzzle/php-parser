// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/div_by_zero_in_static.phpt
  it("Division by zero in static", function () {
    expect(parser.parseCode("<?php\nstatic $a = 1/0;\n?>")).toMatchSnapshot();
  });
});
