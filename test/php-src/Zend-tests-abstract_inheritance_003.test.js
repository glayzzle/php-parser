// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/abstract_inheritance_003.phpt
  it("Allow abstract function override", function () {
    expect(parser.parseCode("<?php\nabstract class A           { abstract function bar($x, $y = 0); }\nabstract class B extends A { abstract function bar($x); }\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});
