// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_049.phpt
  it("JIT ASSIGN: register allocation on x86", function () {
    expect(parser.parseCode("<?php\nfunction &a($i) {\n    $a = \"str\". $i;\n    return $a;\n}\nclass A {\n    public $a;\n    public function test() {\n        $this->a = a(1);\n    }\n}\n$a = new A;\n$a->test();\n$a->test();\n?>\nDONE")).toMatchSnapshot();
  });
});
