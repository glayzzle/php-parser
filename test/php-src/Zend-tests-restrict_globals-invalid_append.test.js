// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/invalid_append.phpt
  it("Cannot append to $GLOBALS", function () {
    expect(parser.parseCode("<?php\n$GLOBALS[] = 1;\n?>")).toMatchSnapshot();
  });
});
