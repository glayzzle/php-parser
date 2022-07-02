// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/abstract_inheritance_002.phpt
  it("Allow abstract function override", function () {
    expect(parser.parseCode("<?php\nabstract class A           { abstract function bar($x); }\nabstract class B extends A { abstract function bar($x, $y = 0); }\necho \"DONE\";\n?>")).toMatchSnapshot();
  });
});
