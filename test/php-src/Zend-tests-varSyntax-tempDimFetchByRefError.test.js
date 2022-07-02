// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/tempDimFetchByRefError.phpt
  it("Passing a dimension fetch on a temporary by reference is not allowed", function () {
    expect(parser.parseCode("<?php\n$fn = function(&$ref) {};\n$fn([0, 1][0]);\n?>")).toMatchSnapshot();
  });
});
