// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/001.phpt
  it("Returned nothing, expected array", function () {
    expect(parser.parseCode("<?php\nfunction test1() : array {\n}\ntest1();\n?>")).toMatchSnapshot();
  });
});
