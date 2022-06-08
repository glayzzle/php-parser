// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/invalid_append_unset.phpt
  it("Cannot append to $GLOBALS in unset()", function () {
    expect(parser.parseCode("<?php\nunset($GLOBALS[]);\n?>")).toMatchSnapshot();
  });
});
