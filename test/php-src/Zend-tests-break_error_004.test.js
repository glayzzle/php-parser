// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/break_error_004.phpt
  it("'break' error (wrong level)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n    while (1) {\n        break 2;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
