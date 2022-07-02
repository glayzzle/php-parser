// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/invalid_assign_ref_rhs.phpt
  it("Cannot by-ref assign to $GLOBALS (RHS)", function () {
    expect(parser.parseCode("<?php\n$var = [];\n$var =& $GLOBALS;\n?>")).toMatchSnapshot();
  });
});
