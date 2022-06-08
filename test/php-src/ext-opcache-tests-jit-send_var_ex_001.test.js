// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/send_var_ex_001.phpt
  it("JIT SEND_VAR_EX fails on SHOULD_SEND_BY_REF checking", function () {
    expect(parser.parseCode("<?php\nnamespace A;\nclass A {\n    private $evalParameters;\n    public function evaluate() {\n        $this->evalParameters = array(\"a\" => \"okey\");\n        extract($this->evalParameters, EXTR_SKIP);\n        echo $a;\n        return false;\n    }\n}\n$a = new A();\n$a->evaluate();\n?>")).toMatchSnapshot();
  });
});
