// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_obj_op_001.phpt
  it("JIT ASSIGN_OBJ_OP: Unsupported types", function () {
    expect(parser.parseCode("<?php\nclass Test{\n}\n$test = new Test;\n(function(){$this->y.=[];})->call($test);\n?>")).toMatchSnapshot();
  });
});
