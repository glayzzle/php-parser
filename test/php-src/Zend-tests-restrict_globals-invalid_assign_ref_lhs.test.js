// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/invalid_assign_ref_lhs.phpt
  it("Cannot by-ref assign to $GLOBALS (LHS)", function () {
    expect(parser.parseCode("<?php\n$var = [];\n$GLOBALS =& $var;\n?>")).toMatchSnapshot();
  });
});
