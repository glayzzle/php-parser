// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/invalid_assign_op.phpt
  it("Cannot compound assign to $GLOBALS", function () {
    expect(parser.parseCode("<?php\n$GLOBALS += [];\n?>")).toMatchSnapshot();
  });
});
