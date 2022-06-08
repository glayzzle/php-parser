// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_obj_002.phpt
  it("PRE_INC_OBJ: 002", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function foo() {\n        $this->prop = PHP_INT_MAX - 5;\n        for ($i = 0; $i < 10; $i++) {\n            var_dump(++$this->prop);\n        }\n    }\n}\n$test = new Test;\n$test->foo();\n?>")).toMatchSnapshot();
  });
});
