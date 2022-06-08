// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/globals_in_globals.phpt
  it("$GLOBALS no longer contains 'GLOBALS'", function () {
    expect(parser.parseCode("<?php\n$g = $GLOBALS;\nvar_dump(isset($g['GLOBALS']));\n?>")).toMatchSnapshot();
  });
});
