// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/instanceof_001.phpt
  it("Testing instanceof operator with several operators", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass;\nvar_dump($a instanceof stdClass);\nvar_dump(new stdCLass instanceof stdClass);\n$b = function() { return new stdClass; };\nvar_dump($b() instanceof stdClass);\n$c = array(new stdClass);\nvar_dump($c[0] instanceof stdClass);\nvar_dump(@$inexistent instanceof stdClass);\n?>")).toMatchSnapshot();
  });
});
