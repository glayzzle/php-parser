// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/032.phpt
  it("Testing array with '[]' passed as argument by reference", function () {
    expect(parser.parseCode("<?php\nfunction test(&$var) { }\ntest($arr[]);\nprint \"ok!\\n\";\n?>")).toMatchSnapshot();
  });
});
