// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/031.phpt
  it("Testing array with '[]' passed as argument by value", function () {
    expect(parser.parseCode("<?php\nfunction test($var) { }\ntest($arr[]);\n?>")).toMatchSnapshot();
  });
});
