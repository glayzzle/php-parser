// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76383.phpt
  it("Bug #76383: array_map on $GLOBALS returns IS_INDIRECT", function () {
    expect(parser.parseCode("<?php\n$a = 1;\narray_map(function($x) use (&$lastval) { $lastval = $x; }, $GLOBALS);\nvar_dump(gettype($lastval), $lastval); // will contain $a\n?>")).toMatchSnapshot();
  });
});
