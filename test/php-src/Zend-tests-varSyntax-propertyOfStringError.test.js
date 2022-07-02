// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/propertyOfStringError.phpt
  it("Cannot take property of a string", function () {
    expect(parser.parseCode("<?php\n\"foo\"->bar;\n?>")).toMatchSnapshot();
  });
});
