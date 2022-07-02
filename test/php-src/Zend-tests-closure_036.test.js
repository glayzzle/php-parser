// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_036.phpt
  it("Closure 036: Rebinding closures, keep calling scope", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $x;\n    public function __construct($v) {\n        $this->x = $v;\n    }\n    public function getIncrementor() {\n        return function() { return ++$this->x; };\n    }\n}\n$a = new A(0);\n$b = new A(10);\n$ca = $a->getIncrementor();\n$cb = $ca->bindTo($b);\n$cb2 = Closure::bind($ca, $b);\nvar_dump($ca());\nvar_dump($cb());\nvar_dump($cb2());\n?>")).toMatchSnapshot();
  });
});
