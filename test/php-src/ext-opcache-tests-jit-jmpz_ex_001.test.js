// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/jmpz_ex_001.phpt
  it("JIT JMPZ_EX: Operand needs to be freed even if same as result", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n    public function method() {\n        return $this->prop && $this->prop->method2();\n    }\n}\nclass Test2 {\n    public function method2() {\n        return true;\n    }\n};\n$test = new Test;\n$test->prop = new Test2;\nvar_dump($test->method());\n?>")).toMatchSnapshot();
  });
});
