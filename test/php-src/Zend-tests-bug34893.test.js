// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34893.phpt
  it("Bug #34893 (PHP5.1 overloading, Cannot access private property)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private $p;\n    function __get($name){\n        return $this->$name;\n    }\n    function __set($name, $value) {\n        $this->$name = $value;\n    }\n}\nclass B {\n    private $t;\n    function __get($name){\n        return $this->$name;\n    }\n    function __set($name, $value) {\n        $this->$name = $value;\n    }\n}\n$a = new A;\n$b = new B;\n$a->p = $b;\n$b->t = \"foo\";\necho $a->p->t;\n$a->p->t = \"bar\";\necho $a->p->t;\n?>")).toMatchSnapshot();
  });
});
