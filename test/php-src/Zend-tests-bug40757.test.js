// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug40757.phpt
  it("Bug #40757 (get_object_vars() get nothing in child class)", function () {
    expect(parser.parseCode("<?php\nclass Base {\n  private $p1='sadf';\n  function getFields($obj){\n    return get_object_vars($obj);\n  }\n}\nclass Child extends Base { }\n$base=new Base();\nprint_r($base->getFields(new Base()));\n$child=new Child();\nprint_r($child->getFields(new Base()));\n?>")).toMatchSnapshot();
  });
});
