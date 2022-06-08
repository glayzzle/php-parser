// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_obj_001.phpt
  it("PRE_INC_OBJ: 001", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n\tfunction foo() {\n\t\t$this->prop = PHP_INT_MAX - 5;\n\t\tfor ($i = 0; $i < 10; $i++) {\n\t\t\tvar_dump(++$this->prop);\n\t\t}\n\t}\n}\n$test = new Test;\n$test->foo();\n?>")).toMatchSnapshot();
  });
});
