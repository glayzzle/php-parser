// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32660.phpt
  it("Bug #32660 (Assignment by reference causes crash when field access is overloaded (__get))", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public $q;\n    function __construct()\n    {\n        $this->q = 3;//array();\n    }\n    function __get($name)\n    {\n        return $this->q;\n    }\n}\n$a = new A;\n$b = \"short\";\n$c =& $a->whatever;\n$c = \"long\";\nprint_r($a);\n$a->whatever =& $b;\n$b = \"much longer\";\nprint_r($a);\n?>")).toMatchSnapshot();
  });
});
