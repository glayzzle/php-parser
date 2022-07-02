// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/003.phpt
  it("Returned 1, expected array", function () {
    expect(parser.parseCode("<?php\nfunction test1() : array {\n    return 1;\n}\ntest1();\n?>")).toMatchSnapshot();
  });
});
