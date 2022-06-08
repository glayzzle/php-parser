// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug81255.phpt
  it("Bug #81255: Memory leak in PHPUnit with functional JIT", function () {
    expect(parser.parseCode("<?php\neval('class B {}');\nclass A extends B {\n    private ?string $x = null;\n    public function foo($a) {\n        if (!($this->x = str_repeat($a, 5))) {\n\t        throw new Exception('ops');\n        }\n        var_dump($this->x);\n        $this->x = null;\n    }\n}\n$a = new A;\n$a->foo('a');\n$a->foo('b');\n?>")).toMatchSnapshot();
  });
});
