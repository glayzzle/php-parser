// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_in_array.phpt
  it("Don't replace IN_ARRAY result type if the using opcode doesn't support it", function () {
    expect(parser.parseCode("<?php\nfunction test($v) {\n    $ary = ['x', 'y'];\n    var_dump(in_array($v, $ary));\n}\ntest('x');\n?>")).toMatchSnapshot();
  });
});
