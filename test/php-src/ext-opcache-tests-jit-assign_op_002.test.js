// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_op_002.phpt
  it("JIT ASSIGN_OP: 002", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public ?string $prop = \"0\";\n}\nfunction test() {\n    $obj = new Test;\n    $ref =& $obj->prop;\n    var_dump($ref &= 1);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
