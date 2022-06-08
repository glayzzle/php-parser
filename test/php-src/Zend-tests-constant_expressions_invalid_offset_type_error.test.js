// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_expressions_invalid_offset_type_error.phpt
  it("Can't use arrays as key for constant array", function () {
    expect(parser.parseCode("<?php\nconst C1 = 1; // force dynamic evaluation\nconst C2 = [C1, [] => 1];\n?>")).toMatchSnapshot();
  });
});
