// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/invalid_foreach_ref.phpt
  it("Cannot use $GLOBALS as foreach result variable (by-ref)", function () {
    expect(parser.parseCode("<?php\nforeach ([1] as &$GLOBALS) {}\n?>")).toMatchSnapshot();
  });
});
