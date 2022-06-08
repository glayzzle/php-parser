// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/break_error_003.phpt
  it("'break' error (not in the loop context)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n    break;\n}\n?>")).toMatchSnapshot();
  });
});
