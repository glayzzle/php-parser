// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/002.phpt
  it("Returned null, expected array", function () {
    expect(parser.parseCode("<?php\nfunction test1() : array {\n    return null;\n}\ntest1();\n?>")).toMatchSnapshot();
  });
});
