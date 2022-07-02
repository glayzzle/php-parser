// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_008.phpt
  it("Assignment to invalid list() value", function () {
    expect(parser.parseCode("<?php\n[42] = [1];\n?>")).toMatchSnapshot();
  });
});
