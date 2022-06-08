// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/invalid_unset.phpt
  it("Cannot unset $GLOBALS", function () {
    expect(parser.parseCode("<?php\nunset($GLOBALS);\n?>")).toMatchSnapshot();
  });
});
