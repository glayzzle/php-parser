// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constructor_abstract_grantparent.phpt
  it("LSP checks are performed against an abstract constructor even if it is not a direct parent", function () {
    expect(parser.parseCode("<?php\nabstract class A {\n    abstract function __construct(X $x);\n}\nclass B extends A {\n    function __construct(X $x) {}\n}\nclass C extends B {\n    function __construct() {}\n}\n?>")).toMatchSnapshot();
  });
});
