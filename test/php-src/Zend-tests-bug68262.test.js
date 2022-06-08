// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68262.phpt
  it("Bug #68262: Broken reference across cloned objects", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $p;\n}\n$first = new C;\n$first->p = 'init';\n$clone = clone $first;\n$ref =& $first->p;\nunset($ref);\n$clone = clone $first;\n$clone->p = 'foo';\nvar_dump($first->p);\n?>")).toMatchSnapshot();
  });
});
