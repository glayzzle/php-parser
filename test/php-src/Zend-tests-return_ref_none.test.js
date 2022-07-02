// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_ref_none.phpt
  it("Argument-less return from by-ref function", function () {
    expect(parser.parseCode("<?php\nfunction &test() {\n    return;\n}\n$ref =& test();\n?>")).toMatchSnapshot();
  });
});
