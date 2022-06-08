// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_039.phpt
  it("Closure 039: Rebinding closures, change scope, same runtime type", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $x;\n    public function __construct($v) {\n        $this->x = $v;\n    }\n    public function getIncrementor() {\n        return function() { return ++$this->x; };\n    }\n}\nclass B extends A {\n    private $x;\n    public function __construct($v) {\n        parent::__construct($v);\n        $this->x = $v*2;\n    }\n}\n$a = new B(-5);\n$b = new B(10);\n$ca = $a->getIncrementor();\nvar_dump($ca());\necho \"Testing with scope given as object\", \"\\n\";\n$cb = $ca->bindTo($b, $b);\n$cb2 = Closure::bind($ca, $b, $b);\nvar_dump($cb());\nvar_dump($cb2());\necho \"Testing with scope as string\", \"\\n\";\n$cb = $ca->bindTo($b, 'B');\n$cb2 = Closure::bind($ca, $b, 'B');\nvar_dump($cb());\nvar_dump($cb2());\n$cb = $ca->bindTo($b, NULL);\nvar_dump($cb());\n?>")).toMatchSnapshot();
  });
});
