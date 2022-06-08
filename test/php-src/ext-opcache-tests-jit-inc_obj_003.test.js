// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_obj_003.phpt
  it("PRE_INC_OBJ: 003", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public float $prop = 1.0;\n}\n$test = new Test;\n$r = &$test->prop;\n$v = --$test->prop;\nvar_dump($v);\n?>")).toMatchSnapshot();
  });
});
