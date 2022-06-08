// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/004.phpt
  it("Returned string, expected array", function () {
    expect(parser.parseCode("<?php\nfunction test1() : array {\n    return \"hello\";\n}\ntest1();\n?>")).toMatchSnapshot();
  });
});
