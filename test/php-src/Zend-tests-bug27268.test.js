// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug27268.phpt
  it("Bug #27268 (Bad references accentuated by clone)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public function &getA()\n    {\n        return $this->a;\n    }\n}\n$A = new A;\n$A->a = array(1);\n$x = $A->getA();\n$clone = clone $A;\n$clone->a = array();\nprint_r($A);\n?>")).toMatchSnapshot();
  });
});
