// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/throw_reference.phpt
  it("Throw reference", function () {
    expect(parser.parseCode("<?php\n$e = new Exception;\n$ref =& $e;\nthrow $e;\n?>")).toMatchSnapshot();
  });
});
