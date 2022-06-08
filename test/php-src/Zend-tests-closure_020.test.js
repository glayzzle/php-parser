// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_020.phpt
  it("Closure 020: Trying to access private property outside class", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    private $test = 3;\n    public function x() {\n        $a = &$this;\n        $this->a = function() use (&$a) { return $a; };\n        var_dump($this->a->__invoke());\n        var_dump(is_a($this->a, 'closure'));\n        var_dump(is_callable($this->a));\n        return $this->a;\n    }\n}\n$foo = new foo;\n$y = $foo->x();\nvar_dump($y()->test);\n?>")).toMatchSnapshot();
  });
});
