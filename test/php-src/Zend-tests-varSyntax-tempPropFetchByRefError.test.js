// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/tempPropFetchByRefError.phpt
  it("Passing a property fetch on a temporary by reference is not allowed", function () {
    expect(parser.parseCode("<?php\n$fn = function(&$ref) {};\n$fn([0, 1]->prop);\n?>")).toMatchSnapshot();
  });
});
