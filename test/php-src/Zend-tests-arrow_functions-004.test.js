// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arrow_functions/004.phpt
  it("Auto-globals in arrow functions", function () {
    expect(parser.parseCode("<?php\n// This should work, but *not* generate a binding for $GLOBALS\n$a = 123;\n$fn = fn() => $GLOBALS['a'];\nvar_dump($fn());\n?>")).toMatchSnapshot();
  });
});
