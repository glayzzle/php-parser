// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_041.phpt
  it("JIT ASSIGN: Assign to typed reference should return modified value", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public ?string $prop;\n}\nfunction test($val) {\n    $obj = new Test;\n    $ref =& $obj->prop;\n    var_dump($ref = $val);\n}\ntest(0);\n?>")).toMatchSnapshot();
  });
});
