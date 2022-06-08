// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/invalid_append_isset.phpt
  it("Cannot append to $GLOBALS in isset()", function () {
    expect(parser.parseCode("<?php\nisset($GLOBALS[]);\n?>")).toMatchSnapshot();
  });
});
