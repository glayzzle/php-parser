// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_keys_on_GLOBALS.phpt
  it("Using array_keys() on $GLOBALS", function () {
    expect(parser.parseCode("<?php\n$foo = 'bar';\nunset($foo);\nvar_dump(in_array('foo', array_keys($GLOBALS)));\n?>")).toMatchSnapshot();
  });
});
