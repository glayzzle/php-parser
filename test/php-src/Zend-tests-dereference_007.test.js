// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dereference_007.phpt
  it("Trying to write on method return", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass foo {\n    public $x = array();\n    public function b() {\n        return $this->x;\n    }\n    public function c() {\n        return $x;\n    }\n    static public function d() {\n    }\n}\n$foo = new foo;\n$foo->b()[0] = 1;\n$foo->c()[100] = 2;\nfoo::d()[] = 3;\nprint \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
