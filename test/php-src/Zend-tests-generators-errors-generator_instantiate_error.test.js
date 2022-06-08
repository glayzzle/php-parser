// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/generator_instantiate_error.phpt
  it("It's not possible to directly instantiate the Generator class", function () {
    expect(parser.parseCode("<?php\nnew Generator;\n?>")).toMatchSnapshot();
  });
});
