// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/break_error_001.phpt
  it("'break' error (non positive integers)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n    break 0;\n}\n?>")).toMatchSnapshot();
  });
});
