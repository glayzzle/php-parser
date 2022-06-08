// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79791.phpt
  it("Bug #79791: Assertion failure when unsetting variable during binary op", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function() {\n    unset($GLOBALS['c']);\n});\n$c -= 1;\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
