// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79778.phpt
  it("Bug #79778: Assertion failure if dumping closure with unresolved static variable", function () {
    expect(parser.parseCode("<?php\n$closure1 = function() {\n    static $var = CONST_REF;\n};\nvar_dump($closure1);\nprint_r($closure1);\n?>")).toMatchSnapshot();
  });
});
