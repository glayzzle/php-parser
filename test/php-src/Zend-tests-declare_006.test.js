// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/declare_006.phpt
  it("Use of non-literals in declare ticks values crashes compiler", function () {
    expect(parser.parseCode("<?php\ndeclare(ticks = UNKNOWN_CONST) {\n  echo 'Done';\n}\n?>")).toMatchSnapshot();
  });
});
