// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug78759.phpt
  it("Bug #78759: array_search in $GLOBALS", function () {
    expect(parser.parseCode("<?php\n$a = 22;\nvar_dump($GLOBALS[\"a\"]);\nvar_dump(array_search(22, $GLOBALS));\nvar_dump(array_search(22, $GLOBALS, true));\n?>")).toMatchSnapshot();
  });
});
