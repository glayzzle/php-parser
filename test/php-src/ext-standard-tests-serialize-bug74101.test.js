// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug74101.phpt
  it("Bug #74101: Unserialize Heap Use-After-Free (READ: 1) in zval_get_type", function () {
    expect(parser.parseCode("<?php\n$s = 'O:9:\"Exception\":799999999999999999999999999997:0i:0;a:0:{}i:2;i:0;i:0;R:2;';\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});
