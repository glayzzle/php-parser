// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_self_add_globals.phpt
  it("Add $GLOBALS to itself", function () {
    expect(parser.parseCode("<?php\n$x = $GLOBALS + $GLOBALS;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
