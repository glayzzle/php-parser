// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/invalid_assign_list_ref.phpt
  it("Cannot list-assign to $GLOBALS (by-ref)", function () {
    expect(parser.parseCode("<?php\nlist(&$GLOBALS) = [1];\n?>")).toMatchSnapshot();
  });
});
