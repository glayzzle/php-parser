// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/027.phpt
  it("Return type of parent is allowed in closure", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass B extends A {}\n$c = function(parent $x): parent { return $x; };\nvar_dump($c->bindTo(null, 'B')(new A));\n?>")).toMatchSnapshot();
  });
});
