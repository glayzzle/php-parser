// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/invalid_assign.phpt
  it("Cannot assign to $GLOBALS", function () {
    expect(parser.parseCode("<?php\n$GLOBALS = [];\n?>")).toMatchSnapshot();
  });
});
