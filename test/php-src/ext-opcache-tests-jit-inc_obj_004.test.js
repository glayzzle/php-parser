// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_obj_004.phpt
  it("PRE_INC_OBJ: 004", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n    function foo() {\n        $this->prop = PHP_INT_MAX-5;\n        for ($i = 0; $i - 15; $i++) {\n            var_dump(++$this->prop);\n        }\n    }\n}\n$test = new Test;\n$test->foo();\n?>")).toMatchSnapshot();
  });
});
