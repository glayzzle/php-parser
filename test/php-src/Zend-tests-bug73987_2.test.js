// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73987_2.phpt
  it("Bug #73987 (Method compatibility check looks to original definition and not parent - nullabilty abstract)", function () {
    expect(parser.parseCode("<?php\nabstract class A {\n    abstract function example($a, $b, $c);\n}\nclass B extends A {\n    function example($a, $b = null, $c = null) { }\n}\nclass C extends B {\n    function example($a, $b, $c = null) { }\n}\n?>")).toMatchSnapshot();
  });
});
