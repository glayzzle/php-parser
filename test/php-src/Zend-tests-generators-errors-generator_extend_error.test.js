// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/generator_extend_error.phpt
  it("The Generator class cannot be extended", function () {
    expect(parser.parseCode("<?php\nclass ExtendedGenerator extends Generator { }\n?>")).toMatchSnapshot();
  });
});
