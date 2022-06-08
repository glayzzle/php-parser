// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_op_007.phpt
  it("JIT ASSIGN_DIM_OP: overflow", function () {
    expect(parser.parseCode("<?php\nclass test {\n    public$member;\n    function __construct(){\n        $this->member = 9223372036854775807;\n        $this->member += 1;\n    }\n}\nnew test();\n?>\nDONE")).toMatchSnapshot();
  });
});
