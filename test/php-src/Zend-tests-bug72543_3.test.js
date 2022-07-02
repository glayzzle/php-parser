// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72543_3.phpt
  it("Bug #72543.3 (different references behavior comparing to PHP 5)", function () {
    expect(parser.parseCode("<?php\n$x = new stdClass;\n$x->a = 1;\n$ref =& $x->a;\nunset($ref);\nvar_dump($x->a + ($x->a = 2));\n?>")).toMatchSnapshot();
  });
});
