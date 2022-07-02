// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug29253.phpt
  it("Bug #29253 (array_diff with $GLOBALS argument fails)", function () {
    expect(parser.parseCode("<?php\n$zz = $GLOBALS;\n$gg = 'afad';\nvar_dump(@array_diff_assoc($GLOBALS, $zz));\nvar_dump($gg);\n?>")).toMatchSnapshot();
  });
});
